import React from "react";
import { FcSearch } from "react-icons/fc";
import "./InputSearch.css";

export default function ({ eventFn }) {
 return (
  <div className="faq-search">
    <input type="text" className="" placeholder="Tên post, người dùng..." onKeyUp={eventFn}/>
    <FcSearch style={{
      position: 'absolute',
      fontSize: '20px',
      top: '50%',
      right: 0,
      transform: 'translate(-50%, -50%)'
    }} />
  </div>
 );
}
