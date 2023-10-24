import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import avatar from "../../assets/sticker.png";
import photo from "../../assets/photo4.JPG";
import resume from '../../resume.pdf'
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
            <span className="hero__title-one">Привет я </span>
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
            Буду рад новым знакомствам!
          </p>
          <div className="hero__buttons">
            <a href="#contacts" className="hero__button">Связаться со мной</a>
            <a href={resume} className="hero__button" download='resume_andrew_tequilex'>Скачать резюме</a>
          </div>
        </div>

        <div className="img__wrapper">
          <img className="img__avatar" src={photo} alt="ava" />
        </div>

        {/* <div className="hero__avatar-wrapper">
          <img className="hero__avatar" src={avatar} alt="avatar" />
        </div> */}
      </motion.div>
    </div>
  );
};

export default HeroSection;
