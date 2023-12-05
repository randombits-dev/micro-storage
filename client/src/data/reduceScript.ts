import {ChainLinkApiUrl} from '../utils/network.ts';
import {UserInfo} from '../utils/definitions.ts';

export const DeleteScript = `
  const result = await Functions.makeHttpRequest({
    url: '${ChainLinkApiUrl}',
    method: "DELETE",
    headers: {
      "X-User-ID": caller
    }
  });
  return Functions.encodeString(JSON.stringify(result));
  return Buffer.concat([ Functions.encodeUint256(item1Votes), Functions.encodeUint256(item2Votes) ])

`;

export const PostScript = `
  const result = await Functions.makeHttpRequest({
    url: '${ChainLinkApiUrl}',
    method: "POST",
    headers: {
      "X-User-ID": caller
    }
  });
  return Functions.encodeString(JSON.stringify(result));
  return Buffer.concat([ Functions.encodeUint256(item1Votes), Functions.encodeUint256(item2Votes) ])

`;

export const getChainlinkDeleteScript = (userInfo: UserInfo) => {
  return `
    const result = await Functions.makeHttpRequest({
      url: '${ChainLinkApiUrl}',
      method: 'DELETE',
      headers: {
        'X-User-ID': '${userInfo.user}',
        'X-Chainlink-Secret': '${process.env.CHAINLINK_SECRET}',
        'X-Token-Id': '${userInfo.token}'
      }
    });
    if (result.error) {
      return Functions.encodeUint256(0);
    }
    return Functions.encodeUint256(1);
  `;
};

export const getChainlinkPostScript = (userInfo: UserInfo, limit: number) => {
  return `
    const result = await Functions.makeHttpRequest({
      url: '${ChainLinkApiUrl}',
      method: 'DELETE',
      data: {
        'id': '${userInfo.user}',
        'limit': ${limit}
      },
      headers: {
        'X-User-ID': '${userInfo.user}',
        'X-Chainlink-Secret': '${process.env.CHAINLINK_SECRET}',
        'X-Token-Id': '${userInfo.token}'
      }
    });
    if (result.error) {
      return Functions.encodeUint256(0);
    }
    return Functions.encodeUint256(1);
  `;
};

export const ReduceTestScript = `
  return Functions.encodeUint256(1);
`;
