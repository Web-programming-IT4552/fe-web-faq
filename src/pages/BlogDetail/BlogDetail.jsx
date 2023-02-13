import Bookmark from "../../components/Bookmark/Bookmark";
import FormAnswer from "../../components/FormAnswer/FormAnswer";
import PostAuthor from "../../components/PostAuthor/PostAuthor";
import PostScript from "../../components/PostScript/PostScript";
import TableOfContents from "../../components/TableOfContent/TableOfContent";
import Heading from "../../components/Heading/Heading";
import "./BlogDetail.css";
import Comment from "../../components/Comment/Comment";
import SimilarPost from "../../components/SimilarPost/SimilarPost";
import { useState, useEffect } from "react";
import getBlog from "./../../service/blog";

const BlogDetail = () => {
  const [name, setName] = useState("");
  const [createTime, setCreateTime] = useState("");
  const [view, setView] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    (async () => {
      const profile = await getBlog();
      //   console.log(profile.user)
      setName(profile.data.name);
      setTitle(profile.data.title);
      setContent(profile.data.content);
      setComment(profile.data.comment);
      
    })();
  }, []);
  return (
    <div className="faq-blog ">
      <div className="faq-corner ">
        <PostAuthor
          fullName={name}
          userName=""
          datetime="08/12/2022, 00:34 AM"
          followers="20"
          questions="10"
          posts="10"
          views="10"
          bookmark="15"
          comments="10"
        />
        <PostScript
          title={title}
          tags={["kinh nghiệm", "chia sẻ", "hiragana", "kanji"]}
          description={content}
        />
        <div className="col-span-4">
          <Bookmark content="BOOKMARK BÀI VIẾT NÀY" />
          {/* <TableOfContents>
          <Heading
            title="MỤC LỤC"
            size="medium"
            color="var(--color-blue-secondary--)"
          />
        </TableOfContents> */}
        </div>
        <div></div>
      </div>

      <div className="col-span-12">
        <div className="faq-post">
          <p className="faq-post-title">Bài viết liên quan</p>
          <div className="faq-post-suggest">
            <SimilarPost
              title="Phương pháp luyện nói tiếng Nhật"
              name="Mai Đào Tuấn Thành"
              views="10"
              bookmarks="21"
              posts="3"
            />
            <SimilarPost
              title="Phương pháp luyện nói tiếng Nhật"
              name="Mai Đào Tuấn Thành"
              views="10"
              bookmarks="21"
              posts="3"
            />
            <SimilarPost
              title="Phương pháp luyện nói tiếng Nhật"
              name="Mai Đào Tuấn Thành"
              views="10"
              bookmarks="21"
              posts="3"
            />
            <SimilarPost
              title="Phương pháp luyện nói tiếng Nhật"
              name="Mai Đào Tuấn Thành"
              views="10"
              bookmarks="21"
              posts="3"
            />
          </div>
        </div>

        <div className="faq-post">
          <p className="faq-post-title">Bài viết khác từ Mai Đào Tuấn Thành</p>
          <div className="faq-post-suggest">
            <SimilarPost
              title="Phương pháp luyện nói tiếng Nhật"
              name="Mai Đào Tuấn Thành"
              views="10"
              bookmarks="21"
              posts="3"
            />
            <SimilarPost
              title="Phương pháp luyện nói tiếng Nhật"
              name="Mai Đào Tuấn Thành"
              views="10"
              bookmarks="21"
              posts="3"
            />
            <SimilarPost
              title="Phương pháp luyện nói tiếng Nhật"
              name="Mai Đào Tuấn Thành"
              views="10"
              bookmarks="21"
              posts="3"
            />
            <SimilarPost
              title="Phương pháp luyện nói tiếng Nhật"
              name="Mai Đào Tuấn Thành"
              views="10"
              bookmarks="21"
              posts="3"
            />
          </div>
        </div>
        <FormAnswer />
        <Comment
          datetime="11/11/2022, 22:20 PM"
          comment="Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip"
          fullName="Mai Dao Tuan Thanh"
          userName="thanhdao"
        />
        <Comment
          datetime="11/11/2022, 22:20 PM"
          comment="Bài viết rất hay."
          fullName="Hoang Anh Tuan"
          userName="tuanha"
        />
      </div>
    </div>
  );
};

export default BlogDetail;
