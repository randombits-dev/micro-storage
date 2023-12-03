export const downloadFile = (fileName: string, contents: string) => {
  // const blob = new Blob([contents], {type: "image/jpeg"});
  // const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = contents;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  // URL.revokeObjectURL(url);
};

export const blobToBase64 = (blob: File): Promise<any> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = function () {
      resolve(reader.result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

export const stringToBase64Url = (str: string) => {
  // Encode the string to base64
  const base64 = btoa(str);

  // Prepend the base64 data URL prefix
  const base64Url = `data:text/plain;base64,${base64}`;

  return base64Url;
};

export const base64UrlToString = (url: string) => {
  // Extract the base64 string from the URL
  const typeStart = url.indexOf(":") + 1;
  const typeEnd = url.indexOf(";");
  const contentStart = url.indexOf(",") + 1;

  const type = url.substring(typeStart, typeEnd);
  const base64String = url.substring(contentStart);
  // Decode the base64 string to a normal string
  return [type, atob(base64String)];
};
