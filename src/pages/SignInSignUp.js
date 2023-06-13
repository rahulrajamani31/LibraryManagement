import React, { useEffect, useRef, useState } from "react";
import Home from "./Home";
import "../Styles/SignInSignUp.css";
import Img from "../images/stackbooks.png";
function SignInSignupWithLocalStorage() {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const [showHome, setShowHome] = useState(false);
  const [show, setShow] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true); // Added state for switching between sign-in and sign-up
  const localSignUp = localStorage.getItem("signUp");
  const localEmail = localStorage.getItem("email");
  const localPassword = localStorage.getItem("password");
  const localName = localStorage.getItem("name");
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    if (localSignUp) {
      setShowHome(true);
    }
    if (localEmail) {
      setShow(true);
    }
  }, []);

  const handleClick = () => {
    if (name.current.value && email.current.value && password.current.value) {
      if (validateEmail(email.current.value)) {
        localStorage.setItem("name", name.current.value);
        localStorage.setItem("email", email.current.value);
        localStorage.setItem("password", password.current.value);
        localStorage.setItem("signUp", email.current.value);
        alert("Account created successfully!!");
        window.location.reload();
      } else {
        setEmailError("Please enter a valid email address.");
      }
    }
  };

  const validateEmail = (email) => {
    // Simple email validation regex pattern
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const handleSignIn = () => {
    if (
      email.current.value === localEmail &&
      password.current.value === localPassword
    ) {
      localStorage.setItem("signUp", email.current.value);
      window.location.reload();
    } else {
      alert("Please enter valid credentials.");
    }
  };

  const handleSwitchForm = () => {
    setIsSignIn(!isSignIn);
    setEmailError("");
  };

  return (
    <div className="can">
      <div className="one">
        <div>
          {" "}
          <h2 className="font-['Poppins'] text-center text-4xl font-bold py-10">
            Library Management System
          </h2>
          <p> by Rahul Rajamani - SREC</p>
        </div>

        <div className="banner-image">
          <img src={Img} alt="Banner Image" />
        </div>
      </div>
      {showHome ? (
        <Home />
      ) : (
        <div className="glass-container">
          {isSignIn ? (
            <div>
              <div>
                <h2 className="text-center text-4xl font-bold py-10">
                  Sign In
                </h2>
              </div>
              <div className="input_space">
                <input placeholder="Email" type="text" ref={email} />
              </div>
              <div className="input_space">
                <input placeholder="Password" type="password" ref={password} />
              </div>
              <button className="sbtn" onClick={handleSignIn}>
                Sign In
              </button>
              <p className="switch-form" onClick={handleSwitchForm}>
                Don't have an account? Sign Up
              </p>
            </div>
          ) : (
            <div>
              <div>
                <h2 className="text-center text-4xl font-bold py-10">
                  Sign Up
                </h2>
              </div>
              <div className="input_space">
                <input placeholder="Name" type="text" ref={name} />
              </div>
              <div className="input_space">
                <input placeholder="Email" type="text" ref={email} />
                {emailError && <p className="error">{emailError}</p>}
              </div>
              <div className="input_space">
                <input placeholder="Password" type="password" ref={password} />
              </div>
              <button className="sbtn" onClick={handleClick}>
                Sign Up
              </button>
              <p className="switch-form" onClick={handleSwitchForm}>
                Already have an account? Sign In
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SignInSignupWithLocalStorage;
