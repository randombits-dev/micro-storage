import React, {useState} from 'react';

interface Props {
  onDelete: () => void;
}

const DeleteMenu = ({onDelete}: Props) => {
  const [open, setOpen] = useState(false);

  const handleYes = () => {
    setOpen(false);
    onDelete();
  };

  const handleNo = () => {
    setOpen(false);
  };

  // const onCopy = () => {
  //   copyClipboard();
  //   setOpen(false);
  // };
  const renderDialog = () => {
    if (!open) {
      return <></>;
    }

    return <div className="absolute top-6 right-0 border bg-neutral-100 z-10">
      {/*<MenuItem onClick={onCopy}>Copy to Clipboard</MenuItem>*/}
      <div className="cursor-pointer px-5 py-3 hover:bg-neutral-200 border-b" onClick={handleYes}>Delete</div>
      <div className="cursor-pointer px-5 py-3 hover:bg-neutral-200" onClick={handleNo}>Cancel</div>
    </div>;
  };

  return (
    <div className="relative pr-5">
      <button onClick={() => setOpen(!open)}><i className="fas fa-trash"/></button>
      {renderDialog()}
    </div>
  );
};

export default DeleteMenu;
