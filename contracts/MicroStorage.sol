// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "./IERC4907.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@chainlink/contracts/src/v0.8/vendor/openzeppelin-solidity/v4.8.0/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import {FunctionsClient} from "@chainlink/contracts/src/v0.8/functions/dev/v1_0_0/FunctionsClient.sol";
import {FunctionsRequest} from "@chainlink/contracts/src/v0.8/functions/dev/v1_0_0/libraries/FunctionsRequest.sol";
import {AutomationCompatibleInterface} from "@chainlink/contracts/src/v0.8/automation/AutomationCompatible.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import {MicroStorageSource} from './MicroStorageSource.sol';

contract MicroStorage is IERC4907, ERC721Enumerable, Ownable, FunctionsClient, AutomationCompatibleInterface {
    using FunctionsRequest for FunctionsRequest.Request;
    using SafeMath for uint256;

    uint256 public basePrice = 1e16;
    uint256 public pricePerDay = 1e15;
    uint256 public minRentalTime = 80000;
    uint256 public maxRentalTime = 2700000;
    uint256 public maxRentalSize = 5;

    struct UserInfo {
        address user;
        uint64 expires;
        uint256 payment;
        uint256 size;
        address coin;
    }

    struct RequestInfo {
        uint256 tokenId;
        uint8 op;
        uint256 size;
    }

    mapping(bytes32 => RequestInfo) private _requestInfo;
    mapping(address => address) private _feeds;

    uint256 private nftId = 1;
    address private devAddress;
    uint64 private subId = 0;
    bytes32 private donId = 0x0;
    bytes private secrets;

    mapping(uint256 => UserInfo) private _userInfo;

    event Subscribe(uint256 tokenId, address user);
    event LimitChanged(uint256 tokenId, address user);
    event Unsubscribe(uint256 tokenId, address user);

    constructor(address _router, uint64 _subId, bytes32 _donId, bytes memory _secrets) ERC721("MicroStorage", "MicroStorage") FunctionsClient(_router) {
        devAddress = msg.sender;
        subId = _subId;
        donId = _donId;
        secrets = _secrets;
        _feeds[0x326C977E6efc84E512bB9C30f76E30c160eD06FB] = 0x1C2252aeeD50e0c9B64bDfF2735Ee3C932F5C408;
        _feeds[0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889] = 0xd0D5e3DB44DE05E9F294BB0a3bEEaF030DE24Ada;
        _feeds[0x001B3B4d0F3714Ca98ba10F6042DaEbF0B1B7b6F] = 0x0FCAa9c899EC5A91eBc3D5Dd869De833b06fB046;
        _feeds[0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa] = 0x0715A7794a1dc8e42615F059dD6e406A6594651A;
    }

    function userInfo(uint256 tokenId) external view returns (UserInfo memory, bool) {
        return (_userInfo[tokenId], userOf(tokenId) == address(0));
    }

    function setPrices(uint256 _basePrice, uint256 _pricePerMonth) external onlyOwner {
        basePrice = _basePrice;
        pricePerDay = _pricePerMonth;
    }

    function setMaxLimit(uint256 _newLimit) external onlyOwner {
        maxRentalSize = _newLimit;
    }

    function subscribe(address coin, uint256 amount, uint256 size) external {
        require(size <= maxRentalSize, "size too large");
        uint256 adjustedAmount = toUSD(amount, coin);
        uint256 timeRequested = adjustedAmount.mul(86400).div(pricePerDay.mul(size).add(basePrice));
        require(timeRequested >= minRentalTime, "under min subscription time");
        require(timeRequested <= maxRentalTime, "over max subscription time");
        IERC20 tk = IERC20(coin);
        tk.transferFrom(msg.sender, address(this), amount);
        _mint(msg.sender, nftId);
        UserInfo storage info = _userInfo[nftId];
        info.user = msg.sender;
        info.expires = uint64(block.timestamp + timeRequested);
        info.payment = amount;
        info.coin = coin;
        info.size = size;
        sendRequest(msg.sender, nftId, size, 0, MicroStorageSource.postRequest);
        nftId++;
    }

    function extend(uint256 tokenId, uint256 amount) external {
        require(userOf(tokenId) == msg.sender, "caller is not owner");
        UserInfo storage user = _userInfo[tokenId];
        uint256 adjustedAmount = toUSD(amount, user.coin);
        uint256 timeRequested = adjustedAmount.mul(86400).div(pricePerDay.mul(user.size).add(basePrice));
        require(user.expires + timeRequested < block.timestamp + maxRentalTime, "over max subscription time");

        IERC20 tk = IERC20(user.coin);
        tk.transferFrom(msg.sender, address(this), amount);
        user.expires = uint64(user.expires + timeRequested);
        user.payment += amount;
    }

    function increaseLimit(uint256 tokenId, uint256 size) external {
        require(userOf(tokenId) == msg.sender, "caller is not owner");
        require(size <= maxRentalSize, "size too large");
        UserInfo storage user = _userInfo[tokenId];
        require(size > user.size, "size must be bigger");
        uint256 timeLeft = uint256(user.expires - block.timestamp);
        uint256 amount = timeLeft.mul(pricePerDay.mul(size - user.size)).div(86400);
        uint256 adjustedAmount = fromUSD(amount, user.coin);
        IERC20 tk = IERC20(user.coin);
        tk.transferFrom(msg.sender, address(this), adjustedAmount);
        user.payment += adjustedAmount;
        user.size = size;
        sendRequest(msg.sender, tokenId, size, 1, MicroStorageSource.postRequest);
    }

    function reduceLimit(uint256 tokenId, uint256 size) external {
        require(userOf(tokenId) == msg.sender, "caller is not owner");
        require(size > 0, "size must be at least 1");
        require(size < _userInfo[tokenId].size, "size must be smaller");
        sendRequest(msg.sender, tokenId, size, 2, MicroStorageSource.postRequest);
    }

    function unsubscribe(uint256 tokenId) external {
        require(userOf(tokenId) == msg.sender, "caller is not owner");
        sendRequest(msg.sender, tokenId, 0, 3, MicroStorageSource.postRequest);
    }

    function sendRequest(address user, uint256 tokenId, uint256 limit, uint8 op, string memory source) internal {
        FunctionsRequest.Request memory req;
        req.initializeRequestForInlineJavaScript(source);
        req.addSecretsReference(secrets);

        string[] memory args = new string[](3);
        args[0] = Strings.toHexString(user);
        args[1] = Strings.toString(tokenId);
        args[2] = Strings.toString(limit);
        req.setArgs(args);
        bytes32 requestId = _sendRequest(req.encodeCBOR(), subId, uint32(300000), donId);
        _requestInfo[requestId] = RequestInfo(tokenId, op, limit);
    }

    function fulfillRequest(
        bytes32 requestId,
        bytes memory response,
        bytes memory
    ) internal override {
        bool success;
        (success) = abi.decode(response, (bool));
        RequestInfo memory info = _requestInfo[requestId];
        if (success) {
            UserInfo storage user = _userInfo[info.tokenId];
            uint256 secondsLeft = uint256(user.expires - block.timestamp);
            if (info.op == 0) {
                emit Subscribe(info.tokenId, user.user);
            } else if (info.op == 1) {
                emit LimitChanged(info.tokenId, user.user);
            } else if (info.op == 2) {
                uint256 creditsToGive = secondsLeft.mul(pricePerDay.mul(user.size - info.size)).div(86400);
                uint256 adjustedCredits = fromUSD(creditsToGive, user.coin);
                IERC20 tk = IERC20(user.coin);
                tk.transfer(user.user, adjustedCredits);
                user.size = info.size;
                user.payment -= adjustedCredits;
                emit LimitChanged(info.tokenId, user.user);
            } else if (info.op == 3) {
                if (secondsLeft > 0) {
                    uint256 creditsToGive = secondsLeft.mul(pricePerDay.mul(user.size).add(basePrice)).div(86400);
                    uint256 adjustedCredits = fromUSD(creditsToGive, user.coin);
                    IERC20 tk = IERC20(user.coin);
                    tk.transfer(user.user, adjustedCredits);
                    user.payment -= adjustedCredits;
                }
                emit Unsubscribe(info.tokenId, user.user);
                _burn(info.tokenId);
            }
        }
    }

    function checkUpkeep(bytes calldata)
    external
    view
    override
    returns (bool upkeepNeeded, bytes memory performData) {
        for (uint256 i = totalSupply(); i > 0; i--) {
            uint256 tokenId = tokenByIndex(i - 1);
            if (uint256(_userInfo[tokenId].expires) < block.timestamp) {
                return (true, abi.encode(tokenId));
            }
        }
        return (false, "");
    }

    function performUpkeep(bytes calldata performData) external override {
        uint256 tokenId;
        (tokenId) = abi.decode(performData, (uint256));
        if (uint256(_userInfo[tokenId].expires) < block.timestamp) {
            address user = _userInfo[tokenId].user;
            _burn(tokenId);
            sendRequest(user, tokenId, 0, 4, MicroStorageSource.postRequest);
        }
    }

    function getPrice(address coin) public view returns (uint256) {
        AggregatorV3Interface feed = AggregatorV3Interface(_feeds[coin]);
        (
            uint80 roundID,
            int price,
            uint startedAt,
            uint timeStamp,
            uint80 answeredInRound
        ) = feed.latestRoundData();
        return uint256(price);
    }

    function toUSD(uint256 amount, address coin) public view returns (uint256) {
        uint256 price = getPrice(coin);
        return amount.mul(price).div(10 ** 8);
    }

    function fromUSD(uint256 amount, address coin) public view returns (uint256) {
        uint256 price = getPrice(coin);
        return amount.mul(10 ** 8).div(price);
    }

    function setUser(uint256, address, uint64) external pure override {
        revert("cannot change user");
    }

    function userOf(uint256 tokenId) public view virtual returns (address){
        if (uint256(_userInfo[tokenId].expires) >= block.timestamp) {
            return _userInfo[tokenId].user;
        }
        else {
            return address(0);
        }
    }

    function userExpires(uint256 tokenId) public view virtual returns (uint256){
        return _userInfo[tokenId].expires;
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721Enumerable) returns (bool) {
        return interfaceId == type(IERC4907).interfaceId || ERC721Enumerable.supportsInterface(interfaceId);
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId,
        uint256 batchSize
    ) internal virtual override(ERC721Enumerable) {
        ERC721Enumerable._beforeTokenTransfer(from, to, tokenId, batchSize);

        if (from == address(0)) {
            // nothing on create
        } else if (to == address(0)) {
            UserInfo memory user = _userInfo[tokenId];
            IERC20 tk = IERC20(user.coin);
            tk.transfer(devAddress, user.payment);
            delete _userInfo[tokenId];
        } else {
            UserInfo storage user = _userInfo[tokenId];
            user.user = to;
        }
    }

    function renounceOwnership() public view override onlyOwner {
        revert("renounceOwnership not allowed");
    }

    function changeDevAddress(address _devAddress) external onlyOwner {
        devAddress = _devAddress;
    }
}
