import React from 'react';
import '../style/startPartTwo.css';
import $ from 'jquery';

import stonks from '../image/stonks.png';
//ICO
import html from '../icons/html.png';
import css from "../icons/css.png";
import sass from "../icons/sass.png";
import bootstrap from "../icons/bootstrap.png";
import javascript from "../icons/javascript.png";
import jquery from "../icons/jquery.png";
import react from "../icons/react.png";
import angular from "../icons/angular.png";
import git from "../icons/git.png";
import github from "../icons/github.png";




const StartPageTwo =()=> {
  $(window).on("scroll", function () {
    const scrollPosition = $(this).scrollTop();
    const windowHeight = $(window).height();
    if($('.frontPageTwo').length >0){
    const offsetSlierToo = $(".frontPageTwo").offset().top;
    const heightSlider = $(".frontPageTwo").outerHeight();
    if (scrollPosition > (offsetSlierToo + heightSlider - windowHeight) / 2.5) {
      $(".slashBox").addClass("move");
      $(".startTwoInfo").addClass("move");
    }
    if (scrollPosition > (offsetSlierToo + heightSlider - windowHeight) / 1.2) {
      $(".skillsIco").addClass("move");
      $(".stonks").addClass("move");
    }
  }
  });


    return (
      <>
        <div className="frontPageTwo">
          <div className="startPartTwoLeft">
            <img src={stonks} alt="stonks" className="stonks"></img>
            <div className="slashBox ">
              <div className="slash"></div>
            </div>
          </div>
          <div className="startPartTwoRight">
            <h1 className="startTwoInfo">Co używałem w moich projektach:</h1>
            <div className="skills">
              <span className="tooltip">
                <img src={html} alt="html" className="skillsIco" />
                <span className="tooltiptext"> HTML</span>
              </span>
              <span className="tooltip">
                <img src={css} alt="css" className="skillsIco" />
                <span className="tooltiptext"> CSS</span>
              </span>
              <span className="tooltip">
                <img src={sass} alt="sass" className="skillsIco" />
                <span className="tooltiptext"> SASS</span>
              </span>
              <span className="tooltip">
                <img src={bootstrap} alt="bootstrap" className="skillsIco" />
                <span className="tooltiptext"> Bootstrap</span>
              </span>
              <span className="tooltip">
                <img src={javascript} alt="javascript" className="skillsIco" />
                <span className="tooltiptext"> Javascript</span>
              </span>
              <span className="tooltip">
                <img src={jquery} alt="jquery" className="skillsIco" />
                <span className="tooltiptext"> jquery</span>
              </span>
              <span className="tooltip">
                <img src={react} alt="react" className="skillsIco" />
                <span className="tooltiptext"> React.js</span>
              </span>
              <span className="tooltip">
                <img src={angular} alt="angular" className="skillsIco" />
                <span className="tooltiptext"> Angular.js</span>
              </span>
              <span className="tooltip">
                <img src={git} alt="git" className="skillsIco" />
                <span className="tooltiptext"> Git / npm</span>
              </span>
              <span className="tooltip">
                <img src={github} alt="github" className="skillsIco" />
                <span className="tooltiptext"> GitHub</span>
              </span>
            </div>
          </div>
        </div>
      </>
    );
}

export default StartPageTwo;