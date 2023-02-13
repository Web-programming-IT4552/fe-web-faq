import React, {useState} from "react";
import "./FormAnswer.css";
import Bookmark from "../Bookmark/Bookmark";
import Icon from "../Icon/Icon";
import Avatar from "../Avatar/Avatar";
import {token} from "../../service/auth";
import {useParams} from "react-router-dom";
import {toast} from "react-toastify";

const FormAnswer = (props) => {
    const {fullName, userName, datetime, comment} = props;
    const [commentAction, setCommentAction] = useState("")
    // const [comments, setComments] = useState([])
    // const onClickHandle = (e) => {
    //     setComments((comments) => [...comments, commentAction])
    // }
    let {id} = useParams();

    const handleSubmit = (e) => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);
        myHeaders.append("Content-Type", "application/json");
        e.preventDefault();
        var raw = JSON.stringify({
            "post_id": {id},
            "content": {commentAction},
            "parent_id": null
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        console.log(raw)

        fetch("https://hedspi.dev/comment/create", requestOptions)
            .then(response => {
                return response.json()
            })
            .then(result => {
                if(result.post_id) {
                    toast.success("Create comment successfull!")
                    console.log(result)
                } else {
                    toast.error("Create comment failed!")
                }
                console.log(result)
            })
            .catch(error => console.log('error', error));
    }

    const onChangeHandle = (e) => {
        setCommentAction(e.target.value)
    }
    return (
        <div>
            <div className="faq-comment-header">
                BÌNH LUẬN
                <hr className="faq-comment__underline"></hr>
            </div>
            <form action="" onSubmit={handleSubmit}>
                <div className="faq-input-border">
                    <div className="faq-input-border__in">
                        {/* {props.children} */}
                        <div className="faq-post__avatar col-span-1">
                            <Avatar/>
                        </div>
                        <textarea
                            className="faq-input-comment"
                            name="contents"
                            id=""
                            placeholder="Viết bình luận....."
                            rows="5"
                            value={commentAction}
                            onChange={onChangeHandle}
                        ></textarea>
                    </div>
                    <button className="faq-button-comment">Bình luận</button>
                </div>
            </form>

        </div>
    );
};

export default FormAnswer;
