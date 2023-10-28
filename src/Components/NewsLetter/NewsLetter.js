import React, { useState } from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  const [formFields, setFormFields] = useState({
    name: "",
    email: ""
  });

  const handleChange = (name, event) => {
    let value = event.target.value;
    setFormFields((prevFormFields) => ({
      ...prevFormFields,
      [name]: value
    }));
  };

  const handleClick = () => {
    const { name, email } = formFields;

    if (!name || !email) {
      alert("Please fill in all the required fields");
      return;
    } else {
      const newFormFields = { ...formFields };
      Object.keys(newFormFields).forEach((key) => (newFormFields[key] = ""));
      setFormFields(newFormFields);
    }
  };

  const { name, email } = formFields;

  return (
    <div className="newsletter-wrapper">
      <div className="newsletter-heading">
        <h1>Subscribe Our Newsletter</h1>
      </div>
      <div className="newsletter-input">
        <div className="input1">
          <input
            type="text"
            placeholder="Name:"
            value={name}
            onChange={(e) => {
              handleChange("name", e);
            }}
          />
        </div>
        <div className="input2">
          <input
            type="text"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => {
              handleChange("email", e);
            }}
          />
        </div>
        <div className="send-button">
          <button type="button" onClick={handleClick}>
            SEND
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
