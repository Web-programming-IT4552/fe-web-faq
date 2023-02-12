import  ReactQuill, { Quill }  from  "react-quill";
import  "react-quill/dist/quill.snow.css";
import {useState} from "react";
import quillEmoji from "quill-emoji";
import "react-quill/dist/quill.snow.css";
import "quill-emoji/dist/quill-emoji.css";

Quill.register(
  {
    "formats/emoji": quillEmoji.EmojiBlot,
    "modules/emoji-toolbar": quillEmoji.ToolbarEmoji,
    "modules/emoji-textarea": quillEmoji.TextAreaEmoji,
    "modules/emoji-shortname": quillEmoji.ShortNameEmoji,
  },
  true,
);

const  modules  = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script:  "sub" }, { script:  "super" }],
    ["blockquote", "code-block"],
    [{ list:  "ordered" }, { list:  "bullet" }],
    [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }],
    ["link", "image", "emoji", "clean"],
  ],
  "emoji-toolbar": true,
  "emoji-textarea": false,
  "emoji-shortname": true,
};

const  TextEditor  = ({ passEditorData }) => {
  const [value, setValue] = useState("");

  return  <ReactQuill
    modules={modules}
    theme="snow"
    placeholder="Nội dung ..."
    onChange={passEditorData}
  />;
};

export  default  TextEditor;
