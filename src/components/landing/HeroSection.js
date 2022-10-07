import React from "react";
import { Fade } from "react-reveal";
const HeroSection = () => {
  return (
    <div className="hero-section">
      <Fade left bounce wobble>
      <div className="hero-side">
        <h1>Explore beyond limitations of Agric-Education.</h1>
        <h5>Anytime, anywhere, increase your knowledge</h5>

        <div className="subscribe-form-area">
            <h5>Subscribe to be informed about latest trend</h5>
            <form className="subscribe-form">
                <input type="email" placeholder="Email Address" required/>
                <button>Get Started</button>
            </form>
        </div>
      </div>
      </Fade>
      <Fade right>
      <div className="hero-side responsive">
        <img src={require('../../assets/hero-here.svg')} alt="Hero "/>
      </div>
      </Fade>
    </div>
  );
};
export default HeroSection;
