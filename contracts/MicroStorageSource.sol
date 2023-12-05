pragma solidity ^0.8.19;


library MicroStorageSource {
  string constant postRequest = "const userId = args[0];const tokenId = args[1];const limit = args[2];const result = await Functions.makeHttpRequest({url: 'https://micro-storage-chainlink-api.mnienow.workers.dev',method: 'POST',data: {id: userId,limit: limit},headers: {'X-User-Id': userId,'X-Chainlink-Secret': secrets.CHAINLINK_SECRET,'X-Token-Id': tokenId}});if (result.error) {throw Error(JSON.stringify(result));}return Functions.encodeUint256(1);";
}
