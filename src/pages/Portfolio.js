import React, { useState } from "react";
import PortfolioPageTwo from "./PortfolioPageTwo";
import "../style/portfolio.css";
import "../phonStyle/portfolio.css";
import $ from "jquery";

const handleButtonClick = function () {
  const windowHeight = $(window).height();
  window.scroll(0, windowHeight);
};

const Portfolio = function () {
  const [addClassStart, setAddClassStart] = useState("portfolioStart ");

  setTimeout(() => {
    setAddClassStart("portfolioStart move");
  }, 500);

  return (
    <>
      <div className="portfolioFrontPage">
        <div className={addClassStart}>
          <h1> Moje prace </h1>{" "}
          <p> Są to moja małe owoce, którymi moge się pochwalić: </p>{" "}
        </div>{" "}
        <button
          className="movePage"
          onClick={handleButtonClick}
          style={{
            left: "calc(50vw - 15px)",
          }}
        >
          <i className="fas fa-arrow-down"> </i>{" "}
        </button>{" "}
        <div
          className="line"
          style={{
            left: 0,
          }}
        >
          {" "}
        </div>{" "}
      </div>{" "}
      <PortfolioPageTwo />
    </>
  );
};

export default Portfolio;
