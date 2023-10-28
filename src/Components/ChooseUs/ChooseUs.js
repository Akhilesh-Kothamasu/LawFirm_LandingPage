import React from "react";
import giftImage from "../../Assets/giftimage.png";
import "./ChooseUs.css";
import ChooseUsContainer from "./ChooseUsContainer";

const data = [
  {
    id: 1,
    image: giftImage,
    successRate: "98% Success Rate",
    description:
      "Amet minim mollit non deserunt ullamco estsit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    btnText: "Read More"
  },
  {
    id: 2,
    image: giftImage,
    successRate: "100% Success Rate",
    description:
      "Amet minim mollit non deserunt ullamco estsit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    btnText: "Read More"
  },
  {
    id: 3,
    image: giftImage,
    successRate: "100% Success Rate",
    description:
      "Amet minim mollit non deserunt ullamco estsit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    btnText: "Read More"
  }
];

const ChooseUs = () => {
  return (
    <div className="chooseus-wrapper">
      <div className="chooseus-header">
        <h3>Why Choose us?</h3>
      </div>
      <div className="chooseus-boxwrapper">
        {data.map((each) => (
          <ChooseUsContainer data={each} key={each.id} />
        ))}
      </div>
    </div>
  );
};

export default ChooseUs;
