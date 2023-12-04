import React, {useEffect} from 'react';
import Quill from 'quill';
import {MarkdownShortcuts} from "./quill-markdown";
import '../../styles/quill.css';

Quill.register('modules/markdown', MarkdownShortcuts);

const QuillEditor = ({data, saveFile}) => {
  useEffect(() => {
    document.querySelector('.ql-toolbar')?.remove();
    const quill = new Quill(`#quill`, {
      modules: {
        toolbar: [
          [{'header': '1'}, {'header': '2'}, 'bold', 'italic', 'underline', 'strike', 'blockquote', 'code', 'link', {'list': 'ordered'}, {'list': 'bullet'}, {'align': []}, {'color': []}, {'background': []}, 'clean'],
        ],
        markdown: {}
      },
      theme: 'snow'
    });
    const initialText = data;
    if (initialText) {
      try {
        const data = JSON.parse(initialText);
        if (data.ops) {
          quill.setContents(data);
        } else {
          quill.setText(initialText);
        }
      } catch {
        quill.setText(initialText);
      }
    }
    quill.on('text-change', () => {
      saveFile(JSON.stringify(quill.getContents()));
    });
  }, [data]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow" id="quill"></div>
    </div>
  );
};

export default QuillEditor;
