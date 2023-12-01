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
