import React from "react";
import "./home.css";
import Info from "./info/Info.js";
import Signup from "./signup/Signup.js";

const Home = () => {
  return (
    <div className="home-sections">
      <div className="info-section">
        <Info />
      </div>
      <div className="signup-section">
        <Signup />
      </div>
    </div>
  );
};

export default Home;
