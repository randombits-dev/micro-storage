// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;


library MicroStorageSource {
  string constant postRequest = "const userId = args[0];const tokenId = args[1];const limit = args[2];const result = await Functions.makeHttpRequest({url: 'https://micro-storage-chainlink-api.randombits.workers.dev',method: 'POST',data: {id: userId,limit: limit,token: tokenId},headers: {'X-Chainlink-Secret': secrets.CHAINLINK_SECRET}});if (result.error) {throw Error(JSON.stringify(result));}return Functions.encodeUint256(1);";
}
