import React from "react";
import {
  AiTwotoneNotification,
  AiFillEdit,
  AiFillLike,
  AiOutlineEye,
  AiOutlineComment,
  AiFillGithub,
  AiFillInstagram,
  AiFillMessage,
  AiFillSetting,
  AiOutlineDown,
  AiOutlineSmile,
  AiOutlineCamera,
  AiOutlineSend,
  AiFillGoogleCircle, AiOutlineClose, AiFillTags, AiOutlineExport, AiOutlineLeft, AiOutlineRight
} from "react-icons/ai";
import {FaRegBookmark, FaBookmark, FaUserAlt, FaLock, FaPencilAlt} from "react-icons/fa";
import {BsFillPencilFill, BsFacebook, BsFillQuestionCircleFill, BsTrash} from "react-icons/bs";
import {HiUserAdd, HiDotsHorizontal} from "react-icons/hi";
import {FiSearch} from "react-icons/fi";
import {GoSignOut} from "react-icons/go";
import {RiPagesLine} from "react-icons/ri";
import "./Icon.css";

const sizeOpj = {
  small: '16px',
  medium: '25px',
  big: '30px',
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
  setting: AiFillSetting,
  arrow_down: AiOutlineDown,
  arrow_left: AiOutlineLeft,
  arrow_right: AiOutlineRight,
  emoji: AiOutlineSmile,
  camera: AiOutlineCamera,
  send: AiOutlineSend,
  follow: HiUserAdd,
  question: BsFillQuestionCircleFill,
  menu: HiDotsHorizontal,
  search: FiSearch,
  user: FaUserAlt,
  password: FaLock,
  google: AiFillGoogleCircle,
  close: AiOutlineClose,
  tag: AiFillTags,
  trash: BsTrash,
  pendesc: FaPencilAlt,
  post: AiOutlineExport,
  signout: GoSignOut,
  content: RiPagesLine,
}

function Icon({ name, sizeText, color }) {
  const size = sizeOpj[sizeText];
  const IconName = icons[name];

  return (
    <div className="faq-icon flex-center">
      <IconName
        style={{
          fontSize: size,
          color: color
        }}
      />
    </div>
  );
}

export default Icon;
