import React, { useState } from "react";
import heroLogo from "../../Assets/hero.png";
import emailLogo from "../../Assets/email.png";
import "./HeroSection.css";

const HeroSection = () => {
  const [emailId, setEmailId] = useState("");

  const handleChange = (e) => {
    setEmailId(e.target.value);
  };

  const handleClick = () => {
    if (!emailId) {
      alert("Please fill in the required field");
      return;
    } else {
      setEmailId("");
    }
  };

  return (
    <div className="herosection-wrapper">
      <div className="left-wrapper">
        <div className="h1-wrapper">
          <h1>You don’t have to Fight them Alone.</h1>
        </div>
        <div className="p-wrapper">
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
            curabitur sodales conubia ut inceptos faucibus himenaeos tortor
            eget, hac massa gravida arcu interdum proin curae.
          </p>
        </div>
        <div className="input-wrapper">
          <img src={emailLogo} alt="email image" width={22} height={18} />
          <input
            type="text"
            value={emailId}
            onChange={handleChange}
            placeholder="Enter your email address"
          />
          <div className="input-button">
            <button onClick={handleClick}>Let’s Talk</button>
          </div>
        </div>
      </div>
      <div className="right-wrapper">
        <img src={heroLogo} alt="hero" />
      </div>
    </div>
  );
};

export default HeroSection;
