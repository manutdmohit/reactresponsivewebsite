import React from "react";
import logo4 from "../Images/logo4.svg";
import Common from "./Common";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About Page"
        imgsrc={logo4}
        visit="/contact"
        btname="Contact Now"
      />
      <Footer />
    </>
  );
};

export default About;
