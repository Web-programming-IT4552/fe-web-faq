import React, {useEffect, useState} from "react";
import banner from "../../assets/clay-banks-hwLAI5lRhdM-unsplash.jpg";
import PostOverview from "../../components/Post/Post";
import Navbar from "../../components/Navbar/Navbar";
import NewestQuestion from "../../components/NewestQuestion/NewestQuestion";
import Heading from "../../components/Heading/Heading";
import Pagination from '../../components/Pagination/Pagination';
import "./Homepage.css";
import {Link, Navigate} from "react-router-dom";
import {isAdmin} from "../../service/role";

const Homepage = () => {
    let PageSize = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const [admin, setAdmin] = useState(false);
    useEffect(() => {
        (async () => {
            if (await isAdmin()) {
                setAdmin(true);
            }
        })();
    }, []);
    return (
        <>
            {admin && <Navigate to="/dashboard"/>}
            <img src={banner} className="faq-banner" alt="banner"/>
            <Navbar/>
            <div className="faq-hmpage">
                <div className="faq-corner">
                    <PostOverview
                        fullName="Mai Đào Tuấn Thành"
                        datetime="08/12/2022, 00:34 AM"
                        title="Làm chủ N1 trong 30 ngày :)"
                        tags={['kinh nghiệm', 'chia sẻ', 'hiragana', 'kanji']}
                        likes="43"
                        views="123"
                        comments="34"
                        bookmarked={true}
                        followed={true}/>

                    <PostOverview
                        fullName="Nguyễn Thị Thúy"
                        datetime="08/12/2022, 05:12 PM"
                        title="Chia sẻ nguồn film anime và những tips hay khi nghe anime hoặc xem phim"
                        tags={['phim', 'anime', 'chia sẻ', 'nghe']}
                        likes="1987"
                        views="12251"
                        comments="107"
                        bookmarked={false}
                        followed={true}/>

                    <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={20}
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(page)}
                    />

                </div>

                <div className="faq-hmpage__nwqt">
                    <div className="">
                        <Heading title="CÂU HỎI MỚI NHẤT" size="medium" color="var(--color-blue-secondary--)"/>
                        <hr className="faq-underline"></hr>
                    </div>

                    <NewestQuestion
                        title="Cách không học mà vẫn giỏi tiếng Nhật ?"
                        likes={12}
                        views={87}
                        comments={3}
                        fullName="Nguyễn Thanh Tùng"/>

                    <NewestQuestion
                        title="Tại sao chữ Kanji trong tiếng Nhật gần giống với chữ Hán của Trung Quốc ?"
                        likes={22}
                        views={197}
                        comments={5}
                        fullName="Hoàng Anh Tuấn"/>
                </div>
            </div>
        </>
    )
}

export default Homepage
