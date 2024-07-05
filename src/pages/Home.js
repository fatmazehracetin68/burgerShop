import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assest/banner.jpg";

const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Burger 33</h1>
        <p>
          Delicious Hamburger <br /> width 33 Sicy Mixed
        </p>
        <Link to="/menu">
          <button>Order Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
