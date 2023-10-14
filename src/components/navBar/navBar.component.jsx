import React from "react";

import "./navBar.styles.scss";

const NavBar = () => {
  return (
    <div className="navbar__wrapper">
      <div className="navbar container">
        <div className="logo">TEQUILEX</div>
        <div className="nav__links">
          <div className="nav__link">About</div>
          <div className="nav__link">Projects</div>
          <div className="nav__link">Contact</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
