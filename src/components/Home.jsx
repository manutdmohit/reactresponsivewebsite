import React from "react";
import logo1 from "../Images/logo1.svg";
import Common from "./Common";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with"
        imgsrc={logo1}
        visit="/service"
        btname="Contact Now"
        className="homeImg"
      />
      <Footer className="foot" />
    </>
  );
};

export default Home;
