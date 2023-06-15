import React from "react";
import "../Styles/welcome.css";
import Img from "../images/e-book.png";

const WelcomePage = () => {
  const redirectToNewSite = () => {
    window.location.href = "https://rahulrajamani.me/";
  };

  return (
    <div className="welcome-page">
      <img src={Img} alt="Welcome" className="welcome-image" />
      <button className="centered-button" onClick={redirectToNewSite}>
        Explore Website
      </button>
    </div>
  );
};

export default WelcomePage;
