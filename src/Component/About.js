import React from "react";
import AboutBackground from "../assets/about-background.png";
import AboutBackgroundImage from "../assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container" id="about">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">
          Pre-Order Your Meals for a Hassle-Free Experience
        </h1>
        <p className="primary-text">
        Our app allows you to pre-order your favorite meals from your preferred stalls in college. Simply browse the menu, place your order, and pick it up at the scheduled time without any delay.
        </p>
        <p className="primary-text">
        The menu is updated in real-time based on availability, ensuring you always have access to fresh and delicious options.
        </p>
        <div className="about-buttons-container">
        </div>
      </div>
    </div>
  );
};

export default About;
