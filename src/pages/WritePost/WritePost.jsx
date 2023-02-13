import React, {useRef, useState} from "react";
import "./WritePost.css";
import Icon from "../../components/Icon/Icon";
import TextEditor from "../../components/TextEditor/TextEditor";
import Button from "../../components/Button/Button";
import {toast} from "react-toastify";
import {token} from "../../service/auth";

export default function WritePost() {
  const HOST = process.env.REACT_APP_HOST;
  const ulRef = useRef();
  const inputRef = useRef();
  const titleRef = useRef();

  const [tags, setTags] = useState([]);
  const [editorData, setEditorData] = useState("");

  function remove(tag) {
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

  // TODO: remove html tag from editor data for calculating length of content
  const filterHTML = editorData.replace(/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g, '');

  const post = () => {
    if(titleRef?.current?.value && tags.length && filterHTML.length >= 20) {
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `Bearer ${token}`);

      let raw = JSON.stringify({
        // title: titleRef.current?.value,
        // tags,
        // content: editorData
        "title": "test",
        "content": "test",
        "type": "post",
      });

      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch(`${HOST}/post/create`, requestOptions)
        .then(response => response.json())
        .then(data => {
          if(data.message) {
            toast.success("Viết bài thành công");
          }
          else toast.error("Viết bài thất bại");
        })
        .catch(error => {
          toast.error("Viết bài thất bại");
        });
    }
  }

  return (
    <form className="faq-wrpost" onSubmit={e => e.preventDefault()}>
      <h1>Chia sẻ những kiến thức của bạn</h1>
      <div className="faq-wrpost__section shadow-light">
        <h3 className="faq-wrpost__heading">Tiêu đề</h3>
        <p className="faq-wrpost__tip text-blur">
          + Cụ thể và dễ hiểu.
        </p>
        <input ref={titleRef} className="faq-wrpost__input" placeholder="VD: Sự khác biệt giữa ごめん và すみません ?" />
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
            <button className={"remove-all flex-center " + (!tags.length ? "disabledbutton" : "")} onClick={removeAll}>
              Xóa hết <Icon name="trash" sizeText="small" />
            </button>
          </ul>
        </div>
      </div>

      <div className="faq-wrpost__section shadow-light">
        <h3 className="faq-wrpost__heading"><Icon name="pendesc" sizeText="small" />Mô tả</h3>
        <p className="faq-wrpost__tip text-blur" style={{marginBottom: 10}}>
          + Mô tả nội dung bạn muốn chia sẻ trong bài post. Tối thiểu 20 ký tự.
        </p>
        <div className="faq-editor">
          <TextEditor passEditorData={setEditorData} />
        </div>
      </div>
      <div
        className={"flex-center " + (titleRef?.current?.value && tags.length && filterHTML.length >= 20 ?  "" : "disabledbutton")}
        onClick={post}
        style={{ marginTop: 40 }}
      >
        <Button value="Đăng" bgColor="var(--color-blue-tertiary--)" textColor="var(--color-blue-zero--)" icon="post" fontSize="20" padding="10px 40px" />
      </div>
    </form>
  );
}
