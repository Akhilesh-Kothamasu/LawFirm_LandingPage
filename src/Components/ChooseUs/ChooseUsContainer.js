import React from "react";
import "./ChooseUsContainer.css";

const ChooseUsContainer = ({ data }) => {
  const { image, successRate, description, btnText } = data;
  return (
    <div className="chooseuscontainer-wrapper">
      <div className="giftimage-wrapper">
        <img src={image} alt="giftImage" />
      </div>

      <h5>{successRate}</h5>
      <p>{description}</p>

      <button className="chooseus-button">{btnText}</button>
    </div>
  );
};

export default ChooseUsContainer;
