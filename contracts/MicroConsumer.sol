// SPDX-License-Identifier: MIT

pragma solidity 0.8.19;

// TODO: Remove this
import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import {FunctionsClient} from "@chainlink/contracts/src/v0.8/functions/dev/v1_0_0/FunctionsClient.sol";
import {FunctionsRequest} from "@chainlink/contracts/src/v0.8/functions/dev/v1_0_0/libraries/FunctionsRequest.sol";

contract MicroConsumer is Ownable, FunctionsClient {
  using FunctionsRequest for FunctionsRequest.Request;

  uint16 public runs = 0;
  bool public lastSuccess = false;

  constructor() FunctionsClient(0x5FC8d32690cc91D4c39d9d3abcBD16989F875707) {
  }

  function requestToReduce(uint256 tokenId, uint256 size, string memory source, bytes32 donId, uint64 subId) onlyOwner external {
    FunctionsRequest.Request memory req;
    req.initializeRequestForInlineJavaScript(source);
    string[] memory args = new string[](2);
    args[0] = Strings.toString(tokenId);
    args[1] = Strings.toString(size);
    req.setArgs(args);
    _sendRequest(req.encodeCBOR(), subId, uint32(300000), donId);
  }

  function fulfillRequest(
    bytes32 requestId,
    bytes memory response,
    bytes memory err
  ) internal override {
    console.log("fulfillRequest");
    bytes32 success;
    (success) = abi.decode(response, (bytes32));
    runs++;
    if (success == "true") {
      lastSuccess = true;
      console.log("success");
    } else {
      lastSuccess = false;
      console.log("fail");
    }
//    console.log(response);
//    console.log(err);
//    emit Response(requestId, s_lastResponse, s_lastError);
  }
}
