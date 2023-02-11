import React, {useRef, useState} from "react";
import faqLogo from "../../assets/icons/japanese.png";
import "./Header.css";
import InputSearch from "../Input/InputSearch/InputSearch";
import Icon from "../Icon/Icon";
import Avatar from "../Avatar/Avatar";
import { Link, useNavigate} from "react-router-dom";
import useViewport from "../../hooks/useViewport";
import Button from "../Button/Button";
function Header() {
  const viewport = useViewport();
  const searchExpand = useRef();
  const navigate = useNavigate();
  const [searchContent, setSearchContent] = useState('');

  const expandSearchBox = () => {
    searchExpand.current?.classList.toggle("search-expand");
  }

  const toSearchPage = e => {
    console.log("event: ", e);
    setSearchContent(prevCt => prevCt = e.target.value);
    if(e.target.value && e.key === 'Enter') {
      navigate('/search');
    }
  }

  return (
    <div className="faq-header">
      <div className="faq-logo">
        <img src={faqLogo} className="faq-logo" alt="faq logo" />
      </div>
      <div className="faq-header__navigation">
        <div className="faq-header__link">
          <Link to="/">Bài viết</Link>
        </div>
        <div className="faq-header__link">
          <Link to="/question">Hỏi đáp</Link>
        </div>
        <div className="faq-header__link">
          <Link to="/videocall">Video call</Link>
        </div>
      </div>

      <div className="faq-header__utils">
        <div className="faq-header__search">
          {viewport.width >= 1000
            ? <InputSearch />
            : (
              <div className="search-mini" onClick={expandSearchBox}>
                <Icon name="search" sizeText="medium" />
              </div>
            )
          }
        </div>
        <Icon name="notification" sizeText="medium" />
        <Icon name="message" sizeText="medium" />
        <Link to="/write">
          <Icon name="pencil" sizeText="medium" color="var(--color-black--)" />
        </Link>
        <Link to="/login">
          <Avatar margin="0 0 0 20px" size="small" />
        </Link>
      </div>

      {
        viewport.width < 1000 &&
        (
          <div ref={searchExpand} className="faq-search__input-box">
            <input type="text" className="faq-search__input" placeholder="Bài viết, câu hỏi, tác giả..." onKeyUp={toSearchPage}/>
            <Link to="/search">
              <Button icon="search" value="Tìm kiếm" bgColor="var(--color-blue-primary--)" textColor="var(--color-white--)" onClickFn={toSearchPage} disable={!searchContent}/>
            </Link>
          </div>
        )
      }

    </div>
  );
}

export default Header;
