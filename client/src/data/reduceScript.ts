export const ReduceScript = `
  console.log('Hello, world!';
  const result = await Functions.makeHttpRequest({
    url: 'http://10.2.0.2:8787',
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "X-User-ID": "user1"
    }
  });
  return Functions.encodeString(JSON.stringify(result));
`;
