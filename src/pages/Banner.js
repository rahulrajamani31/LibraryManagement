import React from "react";
import "../Styles/Banner.css";
import bannerImage from "../images/Carrybooks.png";
import bannerImage2 from "../images/lyingbooks.png";
function Banner() {
  return (
    <div className="banner">
      <div className="banner-image">
        <img src={bannerImage2} alt="Banner Image" />
      </div>
      <div className="banner-description">
        <div>
          <h2 className="text-center text-4xl font-bold py-10">
            Welcome to Dev Store
          </h2>
        </div>
        <p>Because knowledge can never be snatched away</p>
      </div>
      <div className="banner-image">
        <img src={bannerImage} alt="Banner Image" />
      </div>
    </div>
  );
}

export default Banner;
