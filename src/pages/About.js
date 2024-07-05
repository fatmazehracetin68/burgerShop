import React from "react";
import BannerImage from "../assest/1beef.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="aboutTop" style={{ backgroundImage: `url(${BannerImage})` }}></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          lorem ipsum dolor sit amet All the Lorem Ipsum generators on the Internet tend to repeat
          predefined chunks as necessary, making this the first true generator on the Internet. It
          uses a dictionary of over .
        </p>
      </div>
    </div>
  );
};

export default About;
