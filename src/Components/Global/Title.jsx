import PropTypes from "prop-types";
import styles from "../Styles/profile.module.css";
import { motion } from "framer-motion";
const Title = ({
  icon = "person",
  title = "Page Title",
  subtitle = "Some cool subtitle...",
}) => {
  const TitleVar = {
    initial: {
      opacity: 0,
      x: -100,
      
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      y: -100,
    },
  }
  return (
    <>
      <motion.div
        variants={TitleVar} 
        transition={{
          duration: 0.5
        }}
        className={styles.container}>
        <div className={styles.img_box}>
          <span className="material-symbols-outlined theme-icon">{icon}</span>
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </motion.div>
    </>
  );
};

Title.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Title;
