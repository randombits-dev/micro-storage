export const ReduceScript = `
  const result = await Functions.makeHttpRequest({
    url: 'http://10.2.0.2:8787',
    method: "DELETE",
    headers: {
      "X-User-ID": caller
    }
  });
  return Functions.encodeString(JSON.stringify(result));
  return Buffer.concat([ Functions.encodeUint256(item1Votes), Functions.encodeUint256(item2Votes) ])

`;
