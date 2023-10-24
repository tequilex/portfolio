import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme.context";
import "./toggler-theme.scss";

const TogglerTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = (e) => {
    console.log(3245);
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  return (
    <div  className="toggle-switch">
      <div className="toggle__wrap">
        <span onClick={toggleTheme} className={`slider ${theme}`}></span>
      </div>
    </div>
  );
};
export default TogglerTheme;
