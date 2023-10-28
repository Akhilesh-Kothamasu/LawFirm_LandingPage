import React, { useState } from "react";
import "./FAQAccordion.css";

const FAQAccordion = ({ data }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const _toggle = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      {data.length
        ? data.map((each, index) => (
            <div key={each.id}>
              <div className="accordion-heading">
                <h3>{each.question}</h3>
                <div className="accordion-iconwrapper">
                  <p onClick={() => _toggle(index)}>
                    {expandedIndex === index ? "➖" : "➕"}
                  </p>
                </div>
              </div>

              {expandedIndex === index ? (
                <div className="accordion-answer">
                  <p>{each.answer}</p>
                </div>
              ) : (
                <></>
              )}
            </div>
          ))
        : null}
    </>
  );
};

export default FAQAccordion;
