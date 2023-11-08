import "./index.sass";

const Button = ({ text, color, margin, href }) => {
  const buttonStyle = {
    color: color,
    marginRight: margin,
    marginBottom: margin,
  };

  return (
    <a className="custom-link" href={href} target="_blank" rel="noreferrer">
      <button className="custom-button" style={buttonStyle}>
        {text}
      </button>
    </a>
  );
};

export default Button;
