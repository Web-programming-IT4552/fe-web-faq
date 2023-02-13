import React from "react";
import "./PostAuthor.css";
import Avatar from "../Avatar/Avatar";
import Icon from "../Icon/Icon";

const PostAuthor = (props) => {
  const {
    fullName,
    datetime,
    userName,
    likes,
    views,
    followers,
    questions,
    bookmark,
    posts,
    comments,
  } = props;

  return (
    <div className="faq-post-o gap-16">
      <div className="faq-post-o__avatar col-span-1">
        <Avatar size="medium" />
      </div>
      <div className="faq-post-o-header col-span-10 text-left">
        <span className="faq-post-o__name">{fullName}</span>
        <span className="tag_name">{userName}</span>
        <button className="btn-follow">
          + Theo dõi
        </button>
        <span className="date_time">{datetime}</span>
        <div className="icon-flex">
          <div className="icon-of-author">
            <span className="icon-of-post__author">
              <Icon name="follow" sizeText="small" />
            {followers}
            </span>
            <span className="icon-of-post__author">
              <Icon name="question" sizeText="small" />
              {questions}
            </span>
            <span className="icon-of-post__author">
              <Icon name="pencil" sizeText="small" />
              {posts}
            </span>
          </div>
          <div className="icon-of-post">
            <span className="icon-of-post__author">
              <Icon name="view" sizeText="small" />
              {views}
            </span>
            <span className="icon-of-post__author">
              <Icon name="bookmark" sizeText="small" />
              {bookmark}
            </span>
            <span className="icon-of-post__author">
              <Icon name="comment" sizeText="small" />
              {comments}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostAuthor;
