import React from "react";
import "./ClientsBox.css";

const ClientsBox = ({ data }) => {
  const { image, name, designation, description } = data;
  return (
    <div className="clientsbox-wrapper">
      <div className="clientsbox-image">
        <img src={image} alt="client" />
      </div>

      <div className="clientsbox-header">
        <h4>{name}</h4>
        <p>{designation}</p>
      </div>

      <div className="clientsbox-description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ClientsBox;
