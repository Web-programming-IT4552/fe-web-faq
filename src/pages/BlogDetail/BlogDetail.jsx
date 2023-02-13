import Bookmark from "../../components/Bookmark/Bookmark";
import FormAnswer from "../../components/FormAnswer/FormAnswer";
import PostAuthor from "../../components/PostAuthor/PostAuthor";
import PostScript from "../../components/PostScript/PostScript";
import TableOfContents from "../../components/TableOfContent/TableOfContent";
import Heading from "../../components/Heading/Heading";
import "./BlogDetail.css";
import Comment from "../../components/Comment/Comment";
import SimilarPost from "../../components/SimilarPost/SimilarPost";
import {useState, useEffect} from "react";
import getBlog from "./../../service/blog";
import {useParams} from "react-router-dom";

const BlogDetail = () => {
    const [name, setName] = useState("");
    const [createTime, setCreateTime] = useState("");
    const [view, setView] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [comment, setComment] = useState([]);
    const [count_comment, setCount_Comment] = useState([]);
    const [count_view, setCount_View] = useState([]);
    let {id} = useParams();
    console.log(id)
    useEffect(() => {
        (async () => {
            const profile = await getBlog(id);
            //   console.log(profile.user)
            setName(profile.data.name);
            setTitle(profile.data.title);
            setContent(profile.data.content);
            setComment(profile.data.comments.parent_comments);
            setCreateTime(profile.data.created_at)
            setCount_Comment(profile.data.comments.total)
            setCount_View(profile.data.views)
        })();
    }, []);
    return (
        <div className="faq-blog ">
            <div className="faq-corner ">
                <PostAuthor
                    fullName={name}
                    userName=""
                    datetime={createTime}
                    followers="20"
                    questions="10"
                    posts="10"
                    views={count_view}
                    bookmark="15"
                    comments={count_comment}
                />
                <PostScript
                    title={title}
                    tags={["kinh nghiệm", "chia sẻ", "hiragana", "kanji"]}
                    description={content}
                />
                <div className="faq-bookmark">
                    <Bookmark content="BOOKMARK"/>
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

            <div className="col-span-12" style={{padding: "0 10%"}}>
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
                    <p className="faq-post-title">Bài viết khác từ {name}</p>
                    <div className="faq-post-suggest">
                        <SimilarPost
                            title="Phương pháp luyện nói tiếng Nhật"
                            name={name}
                            views="10"
                            bookmarks="21"
                            posts="3"
                        />
                        <SimilarPost
                            title="Phương pháp luyện nói tiếng Nhật"
                            name={name}
                            views="10"
                            bookmarks="21"
                            posts="3"
                        />
                        <SimilarPost
                            title="Phương pháp luyện nói tiếng Nhật"
                            name={name}
                            views="10"
                            bookmarks="21"
                            posts="3"
                        />
                        <SimilarPost
                            title="Phương pháp luyện nói tiếng Nhật"
                            name={name}
                            views="10"
                            bookmarks="21"
                            posts="3"
                        />
                    </div>
                </div>
                <FormAnswer/>
                {comment && comment.map((c, i) => (
                    <Comment
                        datetime={c.updated_at}
                        comment={c.content}
                        fullName={c.name}
                    />
                ))
                }

            </div>
        </div>
    );
};

export default BlogDetail;
