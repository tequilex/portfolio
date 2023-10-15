import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import avatar from "../../assets/sticker.png";
import "./hero-section.styles.scss";

export const HeroSection = () => {
  return (
    <div className="hero__wrapper">
      <motion.div
        className="hero"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="hero__info">
          <h1 className="hero__title">
            <span className="hero__title-one">Hello I'am</span>
            <br />
            <TypeAnimation
              className="hero__title-two"
              sequence={[
                "Andrew",
                1000,
                "Web Developer",
                1000,
                "Tequilex",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
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
      </motion.div>
    </div>
  );
};

export default HeroSection;
