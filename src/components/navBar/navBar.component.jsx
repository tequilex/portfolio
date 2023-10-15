import { ReactComponent as CactusLogo } from "../../assets/cactus.svg";

import "./navBar.styles.scss";

const NavBar = () => {
  return (
    <div className="navbar__wrapper">
      <div className="navbar">
        <div className="logo">
          <CactusLogo className="logo__img"/>
          <div className="logo__text">TEQUILEX</div>
        </div>
        <div className="nav__links">
          <a href="#about" className="nav__link">About</a>
          <a href="#projects" className="nav__link">Projects</a>
          <a href="#contacts" className="nav__link">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
