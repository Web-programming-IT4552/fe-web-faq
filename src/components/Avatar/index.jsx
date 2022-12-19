import React from "react";
import avatarAlt from "../../assets/profile.png";
import "./style.css";
function Avatar({ margin, size }) {
  return (
    <div style={{ margin: margin }} className={`faq-avatar faq-avatar--${size}`} >
      <img src={avatarAlt} alt="avatar image"/>
    </div>
  );
}

export default Avatar;
