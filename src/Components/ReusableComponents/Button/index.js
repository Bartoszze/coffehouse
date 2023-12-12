import { Link } from "react-router-dom";
import "./index.sass";

const Button = ({ text, color, margin, href }) => {
  const buttonStyle = {
    color: color,
    marginRight: margin,
    marginBottom: margin,
  };

  return (
    <Link to={href}>
      <button className="custom-button" style={buttonStyle}>
        {text}
      </button>
    </Link>
  );
};

export default Button;
