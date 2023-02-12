import React from "react";
import "./NewestQuestion.css";
import Icon from "../Icon/Icon";

// eslint-disable-next-line import/no-anonymous-default-export
export default function ({ title, likes, fullName, comments, views }) {

  return (
    <div className="faq-newest-qt">
      <div className="faq-newest-qt__item">
        <p className="faq-newest-qt__title">{title}</p>
        <div className="faq-post-ov__reacts">
          <span className="faq-post-ov__likes">
            <Icon name="like" sizeText="small" />
            {likes}
          </span>
          <span className="faq-post-ov__views">
            <Icon name="view" sizeText="small" />
            {views}
          </span>
          <span className="faq-post-ov__comments">
            <Icon name="comment" sizeText="small" />
            {comments}
          </span>
        </div>
        <p className="faq-newest-qt__name">{fullName}</p>
      </div>
    </div>
  );
}
