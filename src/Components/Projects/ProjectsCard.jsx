import PropTypes from "prop-types";
import styles from "../Styles/projects.module.css"
import { motion } from "framer-motion";
const ProjectsCard = ({ image, title, description, stack, live_link, github }) => {
  return (
      <motion.li
      
          className={styles.item}>
      <img src={image} alt={title} />
      <div className={styles.body}>
          <h3>{title}</h3>
          <p>{description}</p>
          <ul>
            {stack.map((tech, index) => (
              <li key={index}>#{tech}</li>
            ))}
              </ul>
              <div className={styles.btns}>
                  {live_link && <a href={live_link} target="_blank" className={styles.btn_1}>
                      View Live &nbsp; <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>}
                 {github && <a href={github} target="_blank" className={styles.btn_2}>
                      GitHub &nbsp; <i className="fa-brands fa-github-alt"></i>
                  </a>}
              </div>
      </div>
    </motion.li>
  );
};

ProjectsCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
    stack: PropTypes.arrayOf(PropTypes.string).isRequired,
  live_link: PropTypes.string,
  github: PropTypes.string,
};

export default ProjectsCard;
