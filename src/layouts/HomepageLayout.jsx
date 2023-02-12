import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
const HomepageLayout = (props) => {
  return (
    <div>
      <Header 
        name="Mai Đào Tuấn Thành"
        username="Thanh_dao"
      />
        {props.children}
      <Footer />
    </div>
  )
}
export default HomepageLayout