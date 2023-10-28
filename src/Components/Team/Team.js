import React from "react";
import member1 from "../../Assets/member1.png";
import member2 from "../../Assets/member2.png";
import member3 from "../../Assets/member3.png";
import member4 from "../../Assets/member4.png";
import member5 from "../../Assets/member5.png";
import member6 from "../../Assets/member6.png";

import "./Team.css";

const Team = () => {
  return (
    <div className="team-wrapper">
      <div className="team-heading">
        <h1>Our Team</h1>
      </div>
      <div className="teamfirst-wrapper">
        <div>
          <img src={member1} alt="member1" />
        </div>
        <div className="member2-wrapper">
          <img src={member2} alt="member2" />
        </div>
        <div>
          <img src={member3} alt="member3" />
        </div>
      </div>
      <div className="teamsecond-wrapper">
        <div>
          <img src={member4} alt="member4" />
        </div>
        <div>
          <img src={member5} alt="member5" />
        </div>
        <div className="member6-wrapper">
          <img src={member6} alt="member6" />
        </div>
      </div>
    </div>
  );
};

export default Team;
