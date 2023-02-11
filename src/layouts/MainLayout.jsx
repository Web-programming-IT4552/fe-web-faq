import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import banner from "../assets/clay-banks-hwLAI5lRhdM-unsplash.jpg";
import {useLocation} from "react-router-dom";
const MainLayout = (props) => {
  const location = useLocation();
  const routeNotUseBanner = ["/search", "/write"];
  console.log("route: ", location.pathname);
  return (
    <div>
      <Header />
      <img
        src={banner}
        className="faq-banner"
        alt="banner image"
        hidden={routeNotUseBanner.filter(r => location.pathname.startsWith(r)).length > 0}
      />
      {props.children}
      <Footer />
    </div>
  );
}

export default MainLayout
