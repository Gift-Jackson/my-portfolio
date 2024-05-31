import { Link } from "react-router-dom";
import PropTypes from "prop-types"
const Button = ({path, name}) => {
  return (
    <>
      <Link to={path} className="to-right">
        <button className="button">
          <span>{ name}</span>
          <span className="material-symbols-outlined theme-icon">
            arrow_forward
          </span>
        </button>
      </Link>
    </>
  );
};

Button.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Button;
