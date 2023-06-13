import React from "react";
import "../Styles/MyAccount.css";
import Img from "../images/cart.png";

const FCart = () => {
  return (
    <div className="my-account-container">
      <div className="card">
        <div className="card-header">
          <div className="profile-image">
            {/* Replace the 'user.jpg' with the path to your user's profile image */}
            <img src={Img} alt="User" />
          </div>
          <div className="user-details">
            <h1>Your Cart is Empty</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FCart;
