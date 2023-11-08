import "./index.sass";

const Text = (props) => {
  const textColor = {
    color: props.color,
  };
  return <p style={textColor}>{props.text}</p>;
};

export default Text;
