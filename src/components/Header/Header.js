import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="main-container">
      <div className="link-container">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default Header;
