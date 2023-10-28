import React from "react";
import Logo from "../Logo/Logo";
import "./NavBar.css";

const NavBar = () => {
  const listItem = ["Home", "Attroneys", "Practice Areas", "About Us"];
  return (
    <div className="navbar-wrapper">
      <div className="navbar-logo">
        <Logo />
      </div>
      <div className="navbar-items">
        <ul>
          {listItem.map((each, index) => (
            <li key={index}>{each}</li>
          ))}
        </ul>
      </div>
      <div className="navbar-button">
        <button>Contact Now</button>
      </div>
    </div>
  );
};

export default NavBar;
