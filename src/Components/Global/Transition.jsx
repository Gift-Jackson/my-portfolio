import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Transition = ({ children }) => {
  const animeVar = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: 100,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={animeVar}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: "150",
      }}
    >
      {children}
    </motion.div>
  );
};

Transition.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Transition;
