import { NavLink } from "react-router-dom";
import { nav } from "../../Constants/data";
import styles from "../Styles/header.module.css";
import MobileNav from "./MobileNav";
import { useState } from "react";
import useTheme from "../../Hooks/useTheme";

const Header = () => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => {
    setShow((prev) => !prev);
  };

  const { toggleTheme, darkMode } = useTheme();

  return (
    <>
      <header className={styles.header}>
        <nav>
          <a href="/">
            <h2 className={styles.brand}>Portfolio<span className="mark">.</span></h2>
          </a>

          <div className={styles.right}>
            <ul>
              {nav.map((item, index) => (
                <li key={index}>
                  <NavLink className="nav-link" to={item.path}>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <button className={styles.theme} onClick={toggleTheme}>
              <span className="material-symbols-outlined theme-icon">
                {darkMode ? "light_mode" : "dark_mode"}
              </span>
            </button>
            <button className={styles.menu} onClick={toggleMenu}>
              <span className="material-symbols-outlined theme-icon">menu</span>
            </button>
          </div>
        </nav>
      </header>

      {show && <MobileNav toggleMenu={toggleMenu} />}
    </>
  );
};

export default Header;
