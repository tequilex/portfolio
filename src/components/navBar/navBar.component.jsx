import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ReactComponent as CactusLogo } from "../../assets/cactus.svg";

import "./navBar.styles.scss";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const NavBar = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [isActive, setIsActive] = useState("navbar__wrapper unactive");
  const [burger__class, setBurger__class] = useState("burger__bar unclicked");

  useEffect(() => {
    if (isMenuClicked) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "visible";
  }, [isMenuClicked]);

  const toggler = () => {
    if (!isMenuClicked) {
      setIsActive("navbar__wrapper active");
      setBurger__class("burger__bar clicked");
    } else {
      setIsActive("navbar__wrapper unactive");
      setBurger__class("burger__bar unclicked");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const hideMenu = () => {
    setIsMenuClicked(false);
    setIsActive("navbar__wrapper unactive");
    setBurger__class("burger__bar unclicked");
  };

  return (
    <div className={isActive}>
      <div className="navbar">
        <div className="logo">
          <CactusLogo className="logo__img" />
          <div className="logo__text">TEQUILEX</div>
          <div
            className="burger__menu"
            onClick={toggler}
          >
            <div className={burger__class}></div>
            <div className={burger__class}></div>
            <div className={burger__class}></div>
          </div>
        </div>
        <div className="nav__links">
          <a href="#about" className="nav__link" onClick={hideMenu}>
            Обо мне
          </a>
          <a href="#projects" className="nav__link" onClick={hideMenu}>
            Проекты
          </a>
          <a href="#contacts" className="nav__link" onClick={hideMenu}>
            Контакты
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
