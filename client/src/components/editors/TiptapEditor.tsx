import React, {useRef} from 'react';
import {StarterKit} from "@tiptap/starter-kit";
import '../../styles/tiptap.scss';

const extensions = [
  StarterKit,
];

const TiptapEditor = ({data, saveFile}) => {
  const editorEl = useRef();

  return (
      <div className="">
        <div className=""></div>
        <div className="h-[500px]" ref={editorEl}></div>
      </div>
  );
};

export default TiptapEditor;
