import React from 'react';
import { CKEditor } from 'ckeditor4-react';

function TextEditor() {
  return (
    <div className="App">
      <CKEditor
        initData=""
        onInstanceReady={ () => {
        } }
      />
    </div>
  );
}

export default TextEditor;
