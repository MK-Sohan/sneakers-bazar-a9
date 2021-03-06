import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="main-container">
      <div className="link-container">
        <Link to="/">HOME</Link>
        <Link to="/goreview">REVIEWS</Link>
        <Link to="/dashboard">DASHBOARD</Link>
        <Link to="/blogs">BLOGS</Link>
        <Link to="/about">ABOUT</Link>
      </div>
    </div>
  );
};

export default Header;
