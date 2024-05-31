import { NavLink } from "react-router-dom";
import { nav } from "../../Constants/data";
import styles from "../Styles/header.module.css";
import PropTypes from "prop-types"
import { motion } from "framer-motion";
const MobileNav = ({ toggleMenu}) => {
    const navVar = {
        hidden: {
            opacity: 0,
            scaleX: 0
        },
        visible: {
            opacity: 1,
            scaleX: 1
        },
        exit: {
            opacity: 0,
            scaleX: 0
        }
    }
  return (
    <>
          <motion.div
              variants={navVar}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={styles.container}>
        <div className={styles.close} onClick={toggleMenu}>
          <span className="material-symbols-outlined">close</span>
        </div>
        <ul>
          {nav.map((item, index) => (
            <li key={index}>
              <NavLink className="nav-link" to={item.path}>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </motion.div>
    </>
  )
};

MobileNav.propTypes = {
    toggleMenu: PropTypes.func.isRequired,
}

export default MobileNav;
