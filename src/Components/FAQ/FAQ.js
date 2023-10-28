import React from "react";
import "./FAQ.css";
import FAQAccordion from "../FAQAccordion/FAQAccordion";

const data = [
  {
    id: 0,
    question: "Do I need a personal injury report?",
    answer:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
  },
  {
    id: 1,
    question: "How much is my case worth?",
    answer: "7000$"
  },
  {
    id: 2,
    question: "What should I do right after a car accident?",
    answer: "Go to the police station and surrender yourself"
  },
  {
    id: 3,
    question: "How much is my case worth?",
    answer: "7000$"
  }
];

const Faq = () => {
  return (
    <>
      <div className="faq-wrapper">
        <div className="faq-header">
          <h3>FAQ</h3>
        </div>
        <div className="faq-contentwrapper">
          <div className="faq-description">
            <p>Amet minim mollit non deserunt ullamco est</p>
            <p>sit aliqua dolor do amet sint.</p>
          </div>
          <div className="faq-questions">
            <div className="faq-accordioncontainer">
              <FAQAccordion data={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
