import React, {useRef, useState} from "react";
import faqLogo from "../../assets/icons/japanese.png";
import "./Header.css";
import InputSearch from "../Input/InputSearch/InputSearch";
import Icon from "../Icon/Icon";
import Avatar from "../Avatar/Avatar";

import { Link, useNavigate} from "react-router-dom";
import useViewport from "../../hooks/useViewport";
import Button from "../Button/Button";
function Header(props) {
  const viewport = useViewport();
  const searchExpand = useRef();
  const navigate = useNavigate();
  const [searchContent, setSearchContent] = useState('');
  const { avatar, name, username } = props;
  const [open, setOpen] = useState(false);
  const expandSearchBox = () => {
    searchExpand.current?.classList.toggle("search-expand");
  }

  const toSearchPage = e => {
    console.log("event: ", e);
    setSearchContent(prevCt => prevCt = e.target.value);
    if(e.target.value && e.key === 'Enter') {
      expandSearchBox();
      navigate('/search');
    }
  }

  return (
    <div className="faq-header">
      <div className="faq-logo">
        <Link to="/">
          <img src={faqLogo} className="faq-img" alt="faq logo" />
        </Link>
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
            ? <InputSearch eventFn={toSearchPage} />
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
        {/* <Link to="/dropdownmenu"> */}
        <div onClick={() => setOpen(!open)}>
          <Avatar margin="0 0 0 20px" size="small" />
        </div>

        {/* drop down menu */}
        <div className={`drop-down ${open ? "active" : "inactive"}`}>
          <div className="drop-down-menu">
            <div className="faq-post-ov__avatar">
              <Avatar margin="0 10px 0 10px" size="medium" />
            </div>
            <div className="menu-info">
              <div className="info-change">
                <div className="info-change__name">{name}</div>
                <div className="info-change__username">@{username}</div>
              </div>
              <Link to="/dashboard/my-profile">
                <button className="button__edit">
                  <span className="text-edit">Sửa</span>
                </button>
              </Link>
            </div>
          </div>

          <hr />
          <div className="drop-down-menu-item">
            <Link>
              <Icon name="user" sizeText="small" />
              <Link to="/dashboard/my-profile">
                <span className="menu-item__text">Trang cá nhân</span>
              </Link>
            </Link>
          </div>
          <div className="drop-down-menu-item">
            <Link>
              <Icon name="content" sizeText="small" />
              <span className="menu-item__text">Quản lý nội dung</span>
            </Link>
          </div>
          <div className="drop-down-menu-item">
            <Link>
              <Icon name="setting" sizeText="small" />
              <span className="menu-item__text">Tùy chỉnh</span>
            </Link>
          </div>
          <hr />

          <div className="drop-down-menu-item">
            <Link>
              <Icon name="signout" sizeText="small" />
              <span className="menu-item__text">Đăng xuất</span>
            </Link>
          </div>
        </div>
        {/* </Link> */}
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
