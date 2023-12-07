import React from 'react';


const FileDrop = ({children, onDrop}) => {
  const [active, setActive] = React.useState(false);

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    setActive(false);

    const fileList: any[] = [];
    if (e.dataTransfer?.items) {
      for (let i = 0; i < e.dataTransfer.items.length; i++) {
        if (e.dataTransfer.items[i].kind === "file") {
          fileList.push(e.dataTransfer.items[i].getAsFile());
        }
      }
    } else {
      for (let i = 0; i < (e.dataTransfer?.files.length || 0); i++) {
        fileList.push(e.dataTransfer?.files[i]);
      }
    }
    if (fileList.length > 0) {
      onDrop(fileList);
    }
  };

  const handleEnter = (e: DragEvent) => {
    e.preventDefault();
    setActive(true);
  };

  const handleDragLeave = (e: DragEvent) => {
    e.preventDefault();
    setActive(false);
  };

  return (
    <div onDrop={handleDrop} onDragEnter={handleEnter} onDragOver={handleEnter} onDragLeave={handleDragLeave}
         className={active ? 'border-2 border-dashed flex-grow' : 'flex-grow'}>
      {children}
    </div>
  );
};

export default FileDrop;
