import React from "react";
import avatarAlt from "../../assets/profile.png";
import "./Avatar.css";
function Avatar({ margin, size }) {
  return (
    <div style={{ margin: margin }} className={`faq-avatar faq-avatar--${size} flex-center`} >
      <img src={avatarAlt} alt="avatar image"/>
    </div>
  );
}

export default Avatar;
