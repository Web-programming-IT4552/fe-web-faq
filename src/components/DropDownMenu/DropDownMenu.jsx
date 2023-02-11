import React from "react";
import Avatar from "./../Avatar/Avatar";
import { Link } from "react-router-dom";
import Icon from "./../Icon/Icon";
import "./DropDownMenu.css";

const DropDownMenu = (props) => {
  const { avatar, name, username } = props;
  return (
    <div className="drop-down">
      <div className="drop-down-menu">
        <div className="faq-post-ov__avatar">
          <Avatar margin="0 10px 0 10px" size="medium" />
        </div>
        <div className="menu-info">
          <div className="info-change">
            <div className="info-change__name">Mai Đào Tuấn Thành</div>
            <div className="info-change__username">@Thanh_dao</div>
          </div>
          <Link>
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
          <span className="menu-item__text">Trang cá nhân</span>
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
  );
};

export default DropDownMenu;
