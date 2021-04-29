import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  console.log(date);
  return (
    <div className="foot">
      <p>Copyright ©LearnTogether {date} </p>
    </div>
  );
};

export default Footer;
