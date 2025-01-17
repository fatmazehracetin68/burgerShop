import React from "react";
import Logo from "../assest/hamburgerlogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} />
      </div>
      <div>
        <h1 className="title">BURGER SHOP</h1>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
