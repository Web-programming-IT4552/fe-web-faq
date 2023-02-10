import React, {useRef, useState} from "react";
import "./WritePost.css";
import Icon from "../../components/Icon/Icon";
import TextEditor from "../../components/TextEditor/TextEditor";
import Button from "../../components/Button/Button";


export default function() {
  const ulRef = useRef();
  const inputRef = useRef();
  let pressCount = 0;

  const [tags, setTags] = useState([]);

  function remove(tag) {
    let index  = tags.indexOf(tag);
    setTags(prevTags => prevTags.filter(t => t !== tag));
  }

  function removeAll() {
    inputRef.current.value = "";
    setTags([]);
  }

  function handleTag(e) {
    if(e.key === "Enter") {
      e.preventDefault();
      if(tags.length > 4) {
        e.target.value = "";
        return;
      }

      // Replace tab or more one space = 1 space
      let tag = e.target.value.replace(/\s+/g, ' ');
      if(tag.length > 1) {
        // TODO: Filter invalid tag
        const tagSplit = tag.split(/,/)
          .filter(t => !(t && t.length <= 1) )
          .filter(Boolean)
          .slice(0, 5);

        // TODO: Add multiple tags by comma
        tagSplit.forEach(t => {
          if(!tags.includes(t)) {
            setTags(prevTags => [...prevTags, t.trim()]);
          }
        });
      }

      // Clear input
      e.target.value = "";
    }

    if(e.key === "Backspace" && tags.length && !e.target.value) {
      e.target.value = tags.at(-1);
      e.preventDefault();
      setTags(prevTags => prevTags.slice(0, -1));
    }
  }

  return (
    <form className="faq-wrpost" onSubmit={e => e.preventDefault()}>
      <div className="faq-wrpost__section shadow-light">
        <h3 className="faq-wrpost__heading">Tiêu đề</h3>
        <p className="faq-wrpost__tip text-blur">
          + Cụ thể và tưởng tượng bạn đang đặt câu hỏi cho người khác.
        </p>
        <input className="faq-wrpost__input" placeholder="VD: Sự khác biệt giữa ごめん và すみません ?" />
      </div>

      <div className="faq-wrpost__section shadow-light">
        <h3 className="faq-wrpost__heading"><Icon name="tag" sizeText="small" /> Tags</h3>
        <p className="faq-wrpost__tip text-blur">
          + Gắn thẻ bài viết của bạn. Tối đa 5 thẻ. Ít nhất 1 thẻ !
        </p>
        <div className="faq-wrpost__tags">
          <ul ref={ulRef}>

            <span className="tag-tip flex-center" >{5 - tags.length} tag(s)</span>
            {tags && tags?.map(tag => (
              <li key={tag}>
                {tag}
                <span onClick={() => remove(tag)}><Icon name="close" sizeText="small"/></span>
              </li>
            )
            )}
            <input ref={inputRef} onKeyDown={handleTag} />
            <button className="remove-all flex-center" onClick={removeAll}>
              Xóa hết <Icon name="trash" sizeText="small" />
            </button>
          </ul>
        </div>
      </div>

      <div className="faq-wrpost__section shadow-light">
        <h3 className="faq-wrpost__heading"><Icon name="pendesc" sizeText="small" />Mô tả</h3>
        <p className="faq-wrpost__tip text-blur" style={{marginBottom: 10}}>
          + Mô tả câu hỏi / viết nội dung bạn muốn chia sẻ trong blog. Tối thiểu 20 ký tự.
        </p>
        <div className="faq-editor">
          <TextEditor />
        </div>
      </div>
      <div className="flex-center">
        <Button value="Đăng" bgColor="var(--color-blue-secondary--)" textColor="var(--color-white--)" icon="post" fontSize="19" />
      </div>
    </form>
  );
}
