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
import {token} from "../../service/auth";
import Loader from "../../components/Loader/Loader";

const Homepage = () => {
  let PageSize = 5;
  const [totalCount, setTotalCount] = useState( 1);
  const HOST = process.env.REACT_APP_HOST;
  const [postData, setPostData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [admin, setAdmin] = useState(false);
  const [spinner, setSpinner] = useState(false);


  useEffect(() => {
    setSpinner(true);
    getPosts();
    (async () => {
      if (await isAdmin()) {
        setAdmin(true);
      }
    })();
  }, [currentPage]);

  const getPosts = () => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    let requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(`${HOST}/post/get?page=${currentPage}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        setPostData(prevData => prevData = result.data.slice((currentPage - 1)  * PageSize, currentPage * PageSize - 1));
        setTotalCount(result.data.length);
        setSpinner(false);

      })
      .catch(error => console.log('error', error));
  }

  return (
    <>
      {admin && <Navigate to="/dashboard"/>}
      <img src={banner} className="faq-banner" alt="banner"/>
      <Navbar/>
      <div className="faq-hmpage">
        {
          spinner ? <Loader /> :
            (
              <div className="faq-corner">
                { postData && postData.map(p => <PostOverview
                  fullName={p.name}
                  datetime={p?.created_at}
                  title={p.title}
                  tags={["japanese", "share", "learning"]}
                  likes={12}
                  views={p.views}
                  comments={10}
                  bookmarked={true}
                  followed={24}/>)
                }

                <Pagination
                  className="pagination-bar"
                  currentPage={currentPage}
                  totalCount={totalCount}
                  pageSize={PageSize}
                  onPageChange={page => {
                    setCurrentPage(page);
                    getPosts();
                  }}
                />

              </div>
            )
        }


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
