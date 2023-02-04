/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import avatarAlt from "../../assets/profile.png";
import "./Avatar.css";
function Avatar({ margin, size }) {
  return (
    <div style={{ margin: margin }} className={`faq-avatar faq-avatar--${size}`} >
      <img src={avatarAlt} alt="avatar image"/>
    </div>
  );
}

export default Avatar;
