import React, {useState} from "react";
import banner from "../../assets/clay-banks-hwLAI5lRhdM-unsplash.jpg";
import PostOverview from "../../components/Post/Post";
import Navbar from "../../components/Navbar/Navbar";
import NewestQuestion from "../../components/NewestQuestion/NewestQuestion";
import Heading from "../../components/Heading/Heading";
import Pagination from '../../components/Pagination/Pagination';
import "./AdminPage.css";

const AdminPage = () => {
    return (
        <>
            <div className={"main-wrapper"}>
                <h1>Admin</h1>
            </div>
            <div className={"main-wrapper flex"}>
                <div className={"count-wrapper"}>
                    <div>
                        <h2 className={"count-so"}>
                            6000
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
                        <tr>
                            <td className={"th-id"}>1</td>
                            <td className={"th-name"}>John Doe</td>
                            <td className={"th-date"}>2022-01-01</td>
                            <td className={"th-id"}>
                                    <a href={"#"}>Khóa</a>
                            </td>
                        </tr>
                        <tr>
                            <td className={"th-id"}>1</td>
                            <td className={"th-name"}>John Doe</td>
                            <td className={"th-date"}>2022-01-01</td>
                            <td className={"th-id"}>
                                <a href={"#"}>Khóa</a>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default AdminPage;
