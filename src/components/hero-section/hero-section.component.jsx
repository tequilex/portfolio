import React from "react";
import avatar from "../../assets/sticker.png";
import "./hero-section.styles.scss";

export const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero__info">
        <h1 className="hero__title">
          Hello, I'm <br /> Web Developer
        </h1>
        <p className="hero__subtitle">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
          error sunt odit doloribus perspiciatis.
        </p>
        <div className="hero__buttons">
          <button className="hero__button">Hire me</button>
          <button className="hero__button">Download cv</button>
        </div>
      </div>
      <div className="hero__avatar-wrapper">
        <img className="hero__avatar" src={avatar} alt="avatar" />
      </div>
    </div>
  );
};

export default HeroSection;
