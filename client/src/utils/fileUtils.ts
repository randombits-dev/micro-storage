export const downloadFile = (fileName: string, contents: string) => {
  // const blob = new Blob([contents], {type: "image/jpeg"});
  // const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
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
  const typeStart = url.indexOf(':') + 1;
  const typeEnd = url.indexOf(';');
  const contentStart = url.indexOf(',') + 1;

  const type = url.substring(typeStart, typeEnd);
  const base64String = url.substring(contentStart);
  // Decode the base64 string to a normal string
  return [type, atob(base64String)];
};

export const generateFileId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);
};

export const triggerFileUpload = () => {
  return new Promise((resolve, reject) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = false;
    input.click();
    input.addEventListener('change', (event) => {
      const target = event.target as HTMLInputElement;
      if (target.files) {
        resolve(Array.from(target.files));
      } else {
        reject();
      }
      // cleanup
      input.remove();
    });
  });

};

export const formatSize = (kb: number) => {
  if (!kb) {
    return '0 KB';
  }
  const k = 1024;
  const sizes = ['KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(kb) / Math.log(k));
  return parseFloat((kb / Math.pow(k, i)).toFixed(0)) + ' ' + sizes[i];
};
