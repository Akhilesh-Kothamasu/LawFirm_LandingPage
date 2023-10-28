import React from "react";

import client1 from "../../Assets/client1.png";
import client2 from "../../Assets/client2.png";
import client3 from "../../Assets/client3.png";

/*import leftarrow from "../../Assets/leftarrow.png";
import rightarrow from "../../Assets/rightarrow.png";*/

import ClientsBox from "./ClientsBox";

import "./Clients.css";

const data = [
  {
    id: 1,
    image: client1,
    name: "Jane Cooper",
    designation: "Ceo of Hunt",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officiaconsequatduis enim velit mollit Exer. sitaliqua dolor do amet sint. Velit officia"
  },
  {
    id: 2,
    image: client2,
    name: "Devon Lane",
    designation: "Ceo of Hunt",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officiaconsequatduis enim velit mollit Exer. sitaliqua dolor do amet sint. Velit officia"
  },
  {
    id: 3,
    image: client3,
    name: "Robert Fox",
    designation: "Ceo of Hunt",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officiaconsequatduis enim velit mollit Exer. sitaliqua dolor do amet sint. Velit officia"
  }
];

const Clients = () => {
  return (
    <div className="clients-wrapper">
      <div className="clients-header">
        <h3>What says our happy Clients</h3>
        <div className="clients-btncontainer">
          <button className="clients-leftarrow">
            <leftarrow />
          </button>
          <button className="clients-rightarrow"></button>
        </div>
      </div>
      <div className="clientscontent-wrapper">
        {data.map((each) => (
          <ClientsBox data={each} key={each.id} />
        ))}
      </div>
    </div>
  );
};

export default Clients;
