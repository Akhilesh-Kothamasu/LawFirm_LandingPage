import React from "react";
import "./AreaOfPractices.css";

import image1 from "../../Assets/image1.png";
import image2 from "../../Assets/image2.png";
import image3 from "../../Assets/image3.png";
import image4 from "../../Assets/image4.png";
import image5 from "../../Assets/image5.png";
import image6 from "../../Assets/image6.png";

const AreaOfPractices = () => {
  return (
    <div>
      <div className="areaheading-text">
        <h1>Area of Practices</h1>
      </div>
      <div className="first-row">
        <div className="image-container">
          <img src={image1} alt="image1" id="image1" />
          <h3 className="image-text" id="text1">
            BUSINESS LAW
          </h3>
        </div>
        <div className="image-container">
          <img src={image2} alt="image2" id="image2" />
          <h3 className="image-text" id="text2">
            Partnership LAW
          </h3>
        </div>
      </div>
      <div className="second-row">
        <div className="image-container">
          <img src={image3} alt="image3" id="image3" />
          <h3 className="image-text" id="text3">
            REAL ESTATE LAW
          </h3>
        </div>
        <div className="image-container">
          <img src={image4} alt="image4" id="image4" />
          <h3 className="image-text" id="text4">
            BUSINESS LAW
          </h3>
        </div>
      </div>
      <div className="third-row">
        <div className="image-container">
          <img src={image5} alt="image5" id="image5" />
          <h3 className="image-text" id="text5">
            LANDLORD DISPUTES
          </h3>
        </div>
        <div className="image-container">
          <img src={image6} alt="image6" id="image6" />
          <h3 className="image-text" id="text6">
            ELDER ABUSE
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AreaOfPractices;
