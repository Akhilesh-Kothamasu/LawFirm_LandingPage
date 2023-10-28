import React from "react";
import Logo from "../Logo/Logo";
import "./Footer.css";

import instaicon from "../../Assets/instaicon.png";
import fbicon from "../../Assets/fbicon.png";
import twittericon from "../../Assets/twittericon.png";
import pinteresticon from "../../Assets/pinteresticon.png";

const Footer = () => {
  const listItem = ["Home", "Attroneys", "Practice Areas", "About Us"];
  return (
    <div className="footer-wrapper">
      <div className="footer-firstone">
        <div className="footer-logo">
          <Logo />
        </div>
        <div className="footer-items">
          <ul>
            {listItem.map((each, index) => (
              <li key={index}>{each}</li>
            ))}
          </ul>
        </div>
        <div className="footerimages-wrapper">
          <div className="footer-images">
            <img src={instaicon} alt="instaicon" />
            <img src={fbicon} alt="fbicon" />
            <img src={twittericon} alt="twittericon" />
            <img src={pinteresticon} alt="pinteresticon" />
          </div>
        </div>
      </div>
      <div className="footer-secondone">
        <p>© 2020 Acme. All right reserved.</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
    </div>
  );
};

export default Footer;
