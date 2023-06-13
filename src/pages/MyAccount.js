import React from "react";
import "../Styles/MyAccount.css";
import Img from "../images/colded.png";

function MyAccount() {
  return (
    <div className="my-account-container">
      <div className="card">
        <div className="card-header">
          <div className="profile-image">
            {/* Replace the 'user.jpg' with the path to your user's profile image */}
            <img src={Img} alt="User" />
          </div>
          <div className="user-details">
            <h1>{localStorage.getItem("name")}</h1>
            <p>
              <b>E-Mail: </b>
              {localStorage.getItem("email")}
            </p>
            <p>
              <b> Password: </b>
              {localStorage.getItem("password")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
