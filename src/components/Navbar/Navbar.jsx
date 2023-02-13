import React, {useState} from "react";
import "./Navbar.css";
import Button from "../Button/Button";
import {useNavigate} from "react-router-dom";


export default function Navbar() {
  const navigate = useNavigate();

  const [selected, setSelected] = useState(true);

  const handleSelected = e => {
    if(e.target.nodeName === 'NAV') return;
    document.querySelectorAll('.faq-navbar__nav').forEach(link => link.classList.remove('faq-navbar__nav--selected'));
    e.target.parentElement.classList.add('faq-navbar__nav--selected');
  }

  const toWritePostPage = () => navigate('write');
  return (
    <div className="faq-navbar">
      <nav className="faq-navbar__main flex-center" style={{ height: '6rem' }} onClick={e => handleSelected(e)}>
        <li className="faq-navbar__nav faq-navbar__nav--selected">
          <p>Mới nhất</p>
        </li>
        <li className="faq-navbar__nav ">
          <p>Đang theo dõi</p>
        </li>
        <li className="faq-navbar__nav ">
          <p>Blog</p>
        </li>
        <li className="faq-navbar__nav ">
          <p>Bookmark</p>
        </li>
        <li onClick={toWritePostPage}>
          <Button icon="pen" value="VIẾT BÀI" bgColor="var(--color-blue-secondary--)" iconColor="var(--color-black--)" />
        </li>
      </nav>
    </div>
  );
}
