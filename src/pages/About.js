import React from "react";
import "../Styles/About.css";
import Img from "../images/e-book.png";

const About = () => {
  const handleButtonClick = () => {
    window.open("https://rahulrajamaniportfolio.onrender.com/", "_blank");
  };
  return (
    <div className="about-container">
      <div className="image-container">
        <img src={Img} alt="Logo" className="logo-image" />
      </div>
      <div className="description">
        <div>
          <h2 className="text-center text-4xl font-bold py-10">About Us</h2>
        </div>
        <q>
          This is a Library management website created by <b>Rahul Rajamani</b>{" "}
          ,who is a student from <b>Sri Ramakrishna Engineering College</b>.This
          website consists of several pages such as Homepage which contains a
          banner and category pages such as trending books,Fiction based books
          etc.,The second page contains all the books and also provided with a
          search bar which provides an auto-suggestion as well as books in the
          card format.The third page contains books seperately in
          categories.Then About us page,contact us page and Profile page are as
          follows.The user needs to be signed in using email address and
          password.
        </q>
      </div>
      <div className="social-icons">
        <button className="simple-button" onClick={handleButtonClick}>
          Let's Collaborate
        </button>
      </div>
    </div>
  );
};

export default About;
