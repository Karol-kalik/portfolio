import React from 'react';
import $ from 'jquery';
//ICO
import html from '../icons/html.png';
import css from "../icons/css.png";
// import bootstrap from "../icons/bootstrap.png";
import javascript from "../icons/javascript.png";
import jquery from "../icons/jquery.png";
import react from "../icons/react.png";
// import angular from "../icons/angular.png";
import git from "../icons/git.png";

import kreator from '../image/kreator.PNG';
import portfolio from '../image/portfolio.PNG';
import ToDoApp from '../image/ToDoApp.PNG';


const PortfolioPageTwo = () => {

  const fireEmoji = <span role="img" aria-label="fire" className="fireEmoji">🔥</span>;

  $(window).on("scroll", function () {
    const scrollPosition = $(this).scrollTop();
    const windowHeight = $(window).height();
    if ($('.portfolioDiv').length > 0) {
      const offsetSlierToo = $(".portfolioDiv").offset().top;
      const heightSlider = $(".portfolioDiv").outerHeight();
      if (scrollPosition > (offsetSlierToo + heightSlider - windowHeight) /2) {
        $(".portfolioDiv").addClass("move");
      }
    }
  });
  return (
    <>
      <div className ="portfolioDiv" >
      <a href="https://karol-kalik.github.io/portfolio/#/" target="_blank" rel="noopener noreferrer">
        <img src={portfolio} alt="portfolio" className="imgPortfolio" />
            <div className="titleBox">
              <span>{fireEmoji} Portfolio {fireEmoji}</span></div>
          <p className="imgInfo">
              Moje portfolio jest to najbardziej rozbudowany projekt jaki stworzyłem.
              Strona jest stworzona przy pomocy React'a
          </p>
            <div className="usedElements">
                <img src={html} alt="html" className="skillsIco" />
                <img src={css} alt="css" className="skillsIco" />
                <img src={javascript} alt="javascript" className="skillsIco" />
                <img src={jquery} alt="jquery" className="skillsIco" />
                <img src={react} alt="react" className="skillsIco" />
                <img src={git} alt="git" className="skillsIco" />
            </div>
        </a>
      </div>
      <div className ="portfolioDiv" >
        <a href="https://karol-kalik.github.io/skateboardMaker/" target="_blank" rel="noopener noreferrer">
      <img src={kreator} alt="kreator" className="imgPortfolio" />
            <div className="titleBox">
              <span>
                {fireEmoji} Kreator deskorolek {fireEmoji}
              </span>
            </div>
        <p className="imgInfo">
              Kreator deskorolek. Srona napisana w czystym JavaScript.
              Wyświetlane komponenty pobierane są z tabeli.
        </p>
                    <div className="usedElements">
                <img src={html} alt="html" className="skillsIco" />
                <img src={css} alt="css" className="skillsIco" />
                <img src={javascript} alt="javascript" className="skillsIco" />
                <img src={git} alt="git" className="skillsIco" />
            </div>
        </a>
      </div>

      <div className ="portfolioDiv" >
        <a href="https://karol-kalik.github.io/ToDoList/" target="_blank" rel="noopener noreferrer">
      <img src={ToDoApp} alt="kreator" className="imgPortfolio" />
            <div className="titleBox">
              <span>
                {fireEmoji} ToDoApp {fireEmoji}
              </span>
            </div>
        <p className="imgInfo">
              Napisana przeze mnie aplikacja ToDo, z wykożystaniem Reacta.
        </p>
                    <div className="usedElements">
                <img src={html} alt="html" className="skillsIco" />
                <img src={css} alt="css" className="skillsIco" />
                <img src={javascript} alt="javascript" className="skillsIco" />
                <img src={react} alt="react" className="skillsIco" />
                <img src={git} alt="git" className="skillsIco" />
            </div>
        </a>
      </div>

    </>
   );
}

export default PortfolioPageTwo;