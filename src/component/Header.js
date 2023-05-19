import React from "react";
import logo from "../assets/images/logo.png";
import "../index.css";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="" width="250" height="250" />
      </div>
      <div className="flow">
        <h1> Calculate Your Menstrual Period </h1>
      </div>
    </div>
  );
};

export default Header;
