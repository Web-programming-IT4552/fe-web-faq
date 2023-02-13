import React, {useEffect, useRef, useState} from "react";
import Post from "../../components/Post/Post";
import Button from "../../components/Button/Button";
import "./SearchPage.css";
import Icon from "../../components/Icon/Icon";
import Loader from "../../components/Loader/Loader";
import {token} from "../../service/auth";
import {toast} from "react-toastify";
import {useLocation} from "react-router-dom";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  const { state } = useLocation();
  const typesRef = useRef();
  const sortTypeRef = useRef();
  const [searchInput, setSearchInput] = useState(state.toString());
  const [sortBox, setSortBox] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [type, setType] = useState("Bài viết");
  const [sortSearch, setSortSearch] = useState("Phù hợp nhất");
  const [resultText, setResultText] = useState("");
  const [postData, setPostData] = useState([]);
  const [totalResult, setTotalResult] = useState(0);

  console.log("state: ", state);


  const HOST = process.env.REACT_APP_HOST;


  const handleFilterType = (e, elRef, className) => {
    const ulEl = elRef.current;
    Array.from(ulEl.children).forEach(li => li.classList.remove(className));
    e.target.classList.add(className);
    setIsSending(true);
    setSortBox(false);
    if(elRef === typesRef) {
      setType(e.target.textContent);
    }
    else {
      setSortSearch(e.target.textContent);
    }
  }


  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    setSpinner(true);
    setIsSending(false);
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    let raw = JSON.stringify({
      "content": searchInput,
      "page": 1,
      "type": "post",
      "tsort": "newest"
    });

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`${HOST}/post/search`, requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setSpinner(false);
        setResultText(searchInput);
        setPostData(prevData => prevData = data.results);
        setTotalResult(data.total_results);
        console.log("data: ", data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [isSending]);

  return (
    <div className="faq-search faq-search-layout">
      <div className="faq-search__input-box">
        <input onKeyUp={e => setSearchInput(e.target.value)} type="text" className="faq-search__input" placeholder="Bài viết, câu hỏi, tác giả..."/>
        <Button icon="search" value="Tìm kiếm" bgColor="var(--color-blue-primary--)" textColor="var(--color-white--)" disable={!searchInput} onClickFn={() => setIsSending(true)}/>
      </div>
      <div className="faq-search__filter">
        <div className="filter-types">
          <ul ref={typesRef} onClick={e => handleFilterType(e, typesRef, 'active')}>
            <li className="active">Bài viết</li>
            <li>Câu hỏi</li>
            <li>Tác giả</li>
          </ul>
        </div>
        <div className="sort-types">
          Sắp xếp theo: <span className="sort-selected" onClick={() => setSortBox(!sortBox)}>{sortSearch}</span>
          <Icon name="arrow_down" sizeText="small" />
          {
            sortBox &&
            <div className="sort-box">
              <ul ref={sortTypeRef} onClick={e => handleFilterType(e, sortTypeRef, 'sort--active')}>
                <li className="sort--active">Phù hợp nhất</li>
                <li>Lượt xem giảm dần</li>
                <li>Lượt vote giảm dần</li>
                <li>Lượt bình luận giảm dần</li>
                <li>Mới nhất</li>
                <li>Cũ nhất</li>
              </ul>
            </div>
          }
        </div>
      </div>

      <div className="faq-search__results-box">
        {spinner ? <Loader /> :
          (
            <div>
              <div className="faq-search__total"><span className="total">{totalResult}</span> kết quả "<span className="result-text">{resultText}</span>" </div>
              <div className="faq-search__results">
                { postData &&
                  postData.map(p =>
                    <Post
                      fullName={p.name}
                      datetime={p.created_at}
                      title={p.title}
                      tags={['kinh nghiệm', 'chia sẻ', 'hiragana', 'kanji']}
                      likes="43"
                      views={p.views}
                      comments="34"
                      bookmarked={true}
                      followed={true}
                      content={p.content}
                    />
                  )
                }


              </div>
              <div className="faq-search__more">
                <Button icon="arrow_down" value="More" bgColor="var(--color-blue-primary--)" textColor="var(--color-white--)"/>
              </div>
            </div>

          )
        }
      </div>


    </div>
  );
}
