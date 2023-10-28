import React from "react";
import NavBar from "../NavBar/NavBar";
import HeroSection from "../HeroSection/HeroSection";
import "./DashBoard.css";
import Introduction from "../Introduction/Introduction";
import ChooseUs from "../ChooseUs/ChooseUs";
import AreaOfPractices from "../AreaOfPractices/AreaOfPractices";
import Team from "../Team/Team";
import Footer from "../Footer/Footer";
import NewsLetter from "../NewsLetter/NewsLetter";
import FAQ from "../FAQ/FAQ";
import Clients from "../Clients/Clients";

const DashBoard = () => {
  return (
    <div className="dashboard-wrapper">
      <div className="navbar-hero">
        <NavBar />
        <HeroSection />
      </div>
      <div className="rest-all">
        <div className="except-footer">
          <Introduction />
          <ChooseUs />
          <AreaOfPractices />
          <Clients />
          <Team />
          <FAQ />
          <NewsLetter />
        </div>
      </div>
      <div className="only-footer">
        <Footer />
      </div>
    </div>
  );
};

export default DashBoard;
