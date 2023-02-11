import React, {useState} from "react";
import "./Navbar.css";
import Button from "../Button/Button";
import {useNavigate} from "react-router-dom";

export default function () {
  const [selected, setSelected] = useState(true);
  const navigate = useNavigate();
  const handleSelected = e => {
    if(e.target.nodeName === 'LI' || e.target.nodeName === 'P') {

    }
  }

  const toWritePostPage = () => navigate('write');

  return (
    <div className="faq-navbar">
      <nav className="faq-navbar__main flex-center" onClick={e => handleSelected(e)}>
        <input type="radio" name="tab" id="newest" defaultChecked />
        <input type="radio" name="tab" id="following" />
        <input type="radio" name="tab" id="blog" />
        <input type="radio" name="tab" id="bookmark" />
        <label htmlFor="newest" className="faq-navbar__nav newest">
          <p>Mới nhất</p>
        </label>
        <label htmlFor="following" className="faq-navbar__nav following">
          <p>Đang theo dõi</p>
        </label>
        <label htmlFor="blog" className="faq-navbar__nav blog">
          <p>Blog</p>
        </label>
        <label htmlFor="bookmark" className="faq-navbar__nav bookmark">
          <p>Bookmark</p>
        </label>
        <label onClick={toWritePostPage}>
          <Button icon="pen" value="VIẾT BÀI" bgColor="var(--color-blue-primary--)" iconColor="var(--color-black--)" />
        </label>
        <div className="tab"></div>

      </nav>
    </div>
  );
}
