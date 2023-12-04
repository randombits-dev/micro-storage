// SPDX-License-Identifier: MIT

pragma solidity 0.8.19;

// TODO: Remove this
import "hardhat/console.sol";

import "./IERC4907.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@chainlink/contracts/src/v0.8/vendor/openzeppelin-solidity/v4.8.0/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import {FunctionsClient} from "@chainlink/contracts/src/v0.8/functions/dev/v1_0_0/FunctionsClient.sol";
import {FunctionsRequest} from "@chainlink/contracts/src/v0.8/functions/dev/v1_0_0/libraries/FunctionsRequest.sol";

contract MicroStorage is IERC4907, ERC721URIStorage, ERC721Enumerable, Ownable, FunctionsClient {
  using FunctionsRequest for FunctionsRequest.Request;
  using SafeMath for uint256;

  uint256 public basePrice = 1e4;
  uint256 public pricePerDay = 1e3;
//  uint256 public maxUsers = 100;
  uint256 public currentUsers = 0;
  uint256 public minRentalTime = 86400; // 1 day
  uint256 public maxRentalTime = 2592000; // 30 days
  uint256 public maxRentalSize = 5;

  struct UserInfo {
    address user;
    uint64 expires;
    uint256 payment;
    uint256 size;
  }

  struct RequestInfo {
    uint256 tokenId;
    uint8 op;
    uint256 size;
  }

  mapping(bytes32 => RequestInfo) private _requestInfo;

  uint256 private nftId = 1;
  address private paymentCoin;
  address private devAddress;
  uint64 private subId = 0;
  bytes32 private donId = 0x0;
//  MicroConsumer consumer;

  mapping(uint256 => UserInfo) private _userInfo;

  event Subscribe(uint256 tokenId);
  event LimitChanged(uint256 tokenId);

  constructor(address _paymentCoin, address _router, uint64 _subId, bytes32 _donId) ERC721("MicroStorage", "MicroStorage") FunctionsClient(_router) {
    paymentCoin = _paymentCoin;
    devAddress = msg.sender;
    subId = _subId;
    donId = _donId;
  }

  function userInfo(uint256 tokenId) external view returns (UserInfo memory, bool) {
    return (_userInfo[tokenId], userOf(tokenId) == address(0));
  }

  function setPrices(uint256 _basePrice, uint256 _pricePerMonth) external onlyOwner {
    basePrice = _basePrice;
    pricePerDay = _pricePerMonth;
  }

//  function setMaxUsers(uint256 _maxUsers) external onlyOwner {
//    maxUsers = _maxUsers;
//  }

  function subscribe(string memory metadata, uint256 amount, uint256 size) external {
//    cleanUpOldRentals();
    require(size <= maxRentalSize, "size too large");
    uint256 timeRequested = amount.mul(86400).div(pricePerDay.mul(size).add(basePrice));
    require(timeRequested >= minRentalTime, "minimum rental time not met");
    require(timeRequested <= maxRentalTime, "max rental time");
    IERC20 tk = IERC20(paymentCoin);
    tk.transferFrom(msg.sender, address(this), amount);
    _mint(msg.sender, nftId);
    _setTokenURI(nftId, metadata);
    emit Subscribe(nftId);
    UserInfo storage info = _userInfo[nftId];
    info.user = msg.sender;
    info.expires = uint64(block.timestamp + timeRequested);
    info.payment = amount;
    info.size = size;
    nftId++;
//    string memory souce = 'const result = await Functions.makeHttpRequest({url: \'http://10.2.0.2:8787/' + msg.sender + '\',method: \"POST\"});return true;';
//    sendRequest(tokenId, size, 0, source);
  }

  function extend(uint256 tokenId, uint256 amount) external {
    require(userOf(tokenId) == msg.sender, "caller is not owner");
    UserInfo storage user = _userInfo[tokenId];
    uint256 timeRequested = amount.mul(86400).div(pricePerDay.mul(user.size).add(basePrice));
    require(user.expires + timeRequested < block.timestamp + maxRentalTime, "max rental time");

    IERC20 tk = IERC20(paymentCoin);
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
    IERC20 tk = IERC20(paymentCoin);
    tk.transferFrom(msg.sender, address(this), amount);
    user.payment += amount;
    user.size = size;
  }

  function reduce(uint256 tokenId, uint256 size, string memory source) external {
//    string memory souce = 'const result = await Functions.makeHttpRequest({url: \'http://10.2.0.2:8787/' + msg.sender + '\',method: \"DELETE\"});return true;';
    sendRequest(tokenId, size, 1, source);
  }

  function sendRequest(uint256 tokenId, uint256 limit, uint8 op, string memory source) internal {
    FunctionsRequest.Request memory req;
    req.initializeRequestForInlineJavaScript(source);
    string[] memory args = new string[](2);
    args[0] = Strings.toString(tokenId);
    args[1] = Strings.toString(limit);
    req.setArgs(args);
    bytes32 requestId = _sendRequest(req.encodeCBOR(), subId, uint32(300000), donId);
    _requestInfo[requestId] = RequestInfo(tokenId, op, limit);
  }

  function fulfillRequest(
    bytes32 requestId,
    bytes memory response,
    bytes memory err
  ) internal override {
    bool success;
    (success) = abi.decode(response, (bool));
    RequestInfo memory info = _requestInfo[requestId];
    if (info.op == 1) {
      if (success) {
        UserInfo storage user = _userInfo[info.tokenId];
        uint256 secondsLeft = uint256(user.expires - block.timestamp);
        uint256 creditsToGive = secondsLeft.mul(pricePerDay.mul(user.size - info.size)).div(86400);
        IERC20 tk = IERC20(paymentCoin);
        tk.transfer(user.user, creditsToGive);
        user.size = info.size;
        user.payment -= creditsToGive;

      }
    }
  }

  function unsubscribe(uint256 tokenId) external {
    require(userOf(tokenId) == msg.sender, "caller is not owner");
    UserInfo storage user = _userInfo[tokenId];
    uint256 secondsLeft = uint256(user.expires - block.timestamp);
    if (secondsLeft > 0) {
      uint256 creditsToGive = secondsLeft.mul(pricePerDay.mul(user.size).add(basePrice)).div(86400);
      IERC20 tk = IERC20(paymentCoin);
      tk.transfer(msg.sender, creditsToGive);
      user.payment -= creditsToGive;
    }
    _burn(tokenId);
  }

  function provideRefund(uint256 tokenId) external onlyOwner {
    UserInfo storage user = _userInfo[tokenId];
    IERC20 tk = IERC20(paymentCoin);
    tk.transfer(user.user, user.payment);
    user.payment = 0;
    _burn(tokenId);
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

  function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721Enumerable, ERC721URIStorage) returns (bool) {
    return interfaceId == type(IERC4907).interfaceId || ERC721Enumerable.supportsInterface(interfaceId) || ERC721URIStorage.supportsInterface(interfaceId);
  }

  function cleanUpOldRentals() public {
    for (uint256 i = totalSupply(); i > 0; i--) {
      uint256 tokenId = tokenByIndex(i - 1);
      if (uint256(_userInfo[tokenId].expires) < block.timestamp) {
        _burn(tokenId);
      }
    }
  }

  function _beforeTokenTransfer(
    address from,
    address to,
    uint256 tokenId,
    uint256 batchSize
  ) internal virtual override(ERC721Enumerable, ERC721) {
    ERC721Enumerable._beforeTokenTransfer(from, to, tokenId, batchSize);

    if (from == address(0)) {
      // nothing on create
    } else if (to == address(0)) {
      UserInfo memory user = _userInfo[tokenId];
      IERC20 tk = IERC20(paymentCoin);
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

  function _burn(uint256 tokenId) internal virtual override(ERC721URIStorage, ERC721) {
    ERC721URIStorage._burn(tokenId);
  }

  function tokenURI(uint256 tokenId) public view virtual override(ERC721URIStorage, ERC721) returns (string memory) {
    return ERC721URIStorage.tokenURI(tokenId);
  }
}
