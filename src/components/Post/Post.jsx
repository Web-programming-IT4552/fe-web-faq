/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import "./Post.css";
import Avatar from "../Avatar/Avatar";
import Icon from "../Icon/Icon";
import { Link } from "react-router-dom";

export default function (props) {
  const {
    avatar,
    fullName,
    datetime,
    content,
    title,
    tags,
    likes,
    views,
    comments,
    isBookmarked,
    followed,
    blogId,
  } = props;

  const [bookmark, setBookmark] = useState(isBookmarked);

  const handleBookmark = () => {
    setBookmark(!bookmark);
  };

  return (
    <div className="faq-post-ov">
      <div className="faq-post-ov__avatar">
        <Link to={`/post/get/${blogId}`}>
          <Avatar size="small" />
        </Link>
        <Link to={`/post/get/${blogId}`}>
          <div className="faq-post-ov__info">
            <p className="faq-post-ov__name">{fullName}</p>
            <span className="faq-post-ov__datetime">{datetime}</span>
          </div>
        </Link>
      </div>
      <div className="faq-post-ov__desc">
        <Link to={`/post/get/${blogId}`}>
          <p className="faq-post-ov__title">{title}</p>
        </Link>
        <div className="faq-post-ov__tags">
          {tags?.map((tag, i) => (
            <span className="faq-post-ov__tag" key={i}>
              {tag}
            </span>
          ))}
        </div>
        <div className="faq-post-ov__content">{content}</div>
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
      </div>

      <div className="faq-post-ov__bookmark" onClick={handleBookmark}>
        <Icon
          name={bookmark ? "bookmark" : "bookmarked"}
          color="var(--color-blue-secondary--)"
          sizeText="medium"
        />
      </div>
    </div>
  );
}
