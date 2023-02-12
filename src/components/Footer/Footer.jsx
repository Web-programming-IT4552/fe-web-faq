import React from "react";
import "./Footer.css";
import Heading from "../Heading/Heading";
import Icon from "../Icon/Icon";

import imgGooglePlay from "../../assets/google.png";
import imgAppStore from "../../assets/appstore.png";
import imgQrcode from "../../assets/qrcode.png";

export default function () {
  return (
    <div className="faq-footer">
      <div className="faq-footer__top">
        <div className="faq-footer__nav">
          <p className=""><Heading size="medium" title="TÀI NGUYÊN" /></p>
          <p>Bài viết</p>
          <p>Tổ chức</p>
          <p>Hỏi đáp</p>
          <p>Tác giả</p>
          <p>Thảo luận</p>
          <p>Tags</p>
        </div>
        <div className="faq-footer__app">
          <Heading size="medium" title="ỨNG DỤNG DI ĐỘNG" />
          <div className="mobile-logo">
            <div>
              <img style={{ width: 120, marginBottom: 10, marginRight: 20 }} src={imgGooglePlay} alt="Google play image" />
              <img style={{ width: 107, marginBottom: 10 }} src={imgAppStore} alt="App Store image" />
            </div>
            <div>
              <img style={{ width: 80 }} src={imgQrcode} alt="App Store image" />
            </div>
          </div>
          <Heading size="medium" title="LIÊN KẾT" />
          <div className="faq-footer__media">
            <li><Icon name="facebook" sizeText="medium" /></li>
            <li><Icon name="github" sizeText="medium" /></li>
            <li><Icon name="instagram" sizeText="medium" /></li>
          </div>
        </div>
      </div>
      <div className="faq-footer__bottom">
        <p>Language</p>
        <p>@ Copyright, 2022 - Team WEB FAQ 	&lt;One Love, One Future&gt;</p>
      </div>
    </div>
  );
}
