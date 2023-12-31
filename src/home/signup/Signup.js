import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };
  const validateEmail = (email) => {
    const regularExpression =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!regularExpression.test(email)) {
      return false;
    }
    return true;
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email");
      return;
    }
    console.log("Email:", email);
    window.location.href = "https://app.loch.one/welcome";
    setErrorMessage("");
  };

  return (
    <div className="signup-container">
      <div className="signup-title">
        Sign up for <br /> exclusive access.
        <div className="signup-form">
          <input
            className="signup-email-tf"
            placeholder="Your email address"
            value={email}
            onChange={handleInputChange}
          />
          {errorMessage && <p className="signup-error">{errorMessage}</p>}
          <button className="signup-button" onClick={handleSubmit}>
            Get started
          </button>
        </div>
      </div>
      <h4 className="signup-message">
        You'll receive an email with an invite link to join.
      </h4>
      <Link to="/" className="back-button mobile-only">
        Go back
      </Link>
    </div>
  );
}
export default Signup;
