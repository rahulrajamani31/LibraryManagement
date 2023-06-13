import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import SignInSignupWithLocalStorage from "./pages/SignInSignUp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>);
