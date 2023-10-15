import { ReactComponent as CactusLogo } from "../../assets/cactus.svg";
import "./footer.styles.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <CactusLogo className="logo__img" />
        <div className="logo__text">TEQUILEX</div>
      </div>
      <div className="rules">All rights reserved</div>
    </footer>
  );
};
export default Footer;
