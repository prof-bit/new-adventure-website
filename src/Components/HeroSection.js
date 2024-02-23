import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "./App.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="./Assets\videos\video-2.mp4" />
      <h1> ADVENTURE AWAITS</h1>
      <p> what are you waiting for?</p>
      <div className=' ="hero-btns'>
        <button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Get started
        </button>
        <button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className=" far fa-play-circle"/>
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
