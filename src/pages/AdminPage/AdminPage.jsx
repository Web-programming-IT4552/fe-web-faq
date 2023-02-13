import React, {useEffect, useState} from "react";
import "./AdminPage.css";
import {getView} from "../../service/view";
import getListUser from "../../service/user";

const AdminPage = () => {
    const [view, setView] = useState(0);
    const [listUser, setListUser] = useState([]);
    useEffect(() => {
        (async () => {
            setView(await getView());
        })();
    }, []);

    useEffect(() => {
        (async () => {
            setListUser(await getListUser());
        })();
    }, []);

    return (
        <>
            <div className={"main-wrapper"}>
                <h1>Admin</h1>
            </div>
            <div className={"main-wrapper flex"}>
                <div className={"count-wrapper"}>
                    <div>
                        <h2 className={"count-so"}>{view}
                        </h2>
                        <span className={"count-text"}>Lượt xem</span>
                    </div>
                </div>
                <div className={"post-wrapper"}>
                    <p>Bài viết mới</p>
                    <input type={"text"} placeholder={"tìm kiếm"}/>
                    <div className={"post-list"}>
                        <div className={"post-item flex"}>
                            <div className="sl">
                                <div className={"content"}>Meeting today <span className="date"> 5pm</span>
                                </div>
                                <div className="desc">you can write anything</div>
                            </div>
                            <div className={"button-wrapper"}>
                                <a href={"#"}>Khóa</a>
                                <a href={"#"}>Xóa</a>
                            </div>
                        </div>
                        <div className={"post-item flex"}>
                            <div className="sl">
                                <div className={"content"}>Meeting today <span className="date"> 5pm</span>
                                </div>
                                <div className="desc">you can write anythingyou can write anything</div>
                            </div>
                            <div className={"button-wrapper"}>
                                <a href={"#"}>Khóa</a>
                                <a href={"#"}>Xóa</a>
                            </div>
                        </div>
                        <div className={"post-item flex"}>
                            <div className="sl">
                                <div className={"content"}>Meeting today <span className="date"> 5pm</span>
                                </div>
                                <div className="desc">you can write anything</div>
                            </div>
                            <div className={"button-wrapper"}>
                                <a href={"#"}>Khóa</a>
                                <a href={"#"}>Xóa</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"main-wrapper flex"}>
                <div className={"user-wrapper"}>
                    <p>User</p>
                    <input type={"text"} placeholder={"tìm kiếm"}/>
                    <table id="user-table">
                        <thead>
                        <tr>
                            <th className={"th-id"}>ID</th>
                            <th className={"th-name"}>Name</th>
                            <th className={"th-date"}>Date</th>
                            <th className={"th-id"}>ID</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            listUser.map((user, index) => {
                                return (
                                    <tr key={index}>
                                        <td className={"th-id"}>{index + 1}</td>
                                        <td className={"th-name"}>{user.name}</td>
                                        <td className={"th-date"}>{user.created_at}</td>
                                        <td className={"th-id"}>
                                            <a href={"#"}>Khóa</a>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default AdminPage;