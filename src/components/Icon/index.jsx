import React from "react";
import {
  AiTwotoneNotification,
  AiFillEdit,
  AiFillLike,
  AiOutlineEye,
  AiOutlineComment,
  AiFillGithub, AiFillInstagram, AiFillMessage
} from "react-icons/ai";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { BsFillPencilFill, BsFacebook } from "react-icons/bs";
import "./style.css";

const sizeOpj = {
  small: '16px',
  medium: '25px',
  big: '50px',
};

const icons = {
  notification: AiTwotoneNotification,
  pencil: AiFillEdit,
  like: AiFillLike,
  view: AiOutlineEye,
  comment: AiOutlineComment,
  bookmark: FaRegBookmark,
  bookmarked: FaBookmark,
  pen: BsFillPencilFill,
  facebook: BsFacebook,
  github: AiFillGithub,
  instagram: AiFillInstagram,
  message: AiFillMessage,
}

function Icon({ name, sizeText, color }) {
  const size = sizeOpj[sizeText];
  const IconName = icons[name];

  return (
    <div className="faq-icon">
      <IconName style={{
        fontSize: size,
        color: color
      }}/>
    </div>
  );
}

export default Icon;
