import "./index.sass";

const Block = (props) => {
  const blockColor = {
    backgroundColor: props.color,
  };

  return (
    <div style={blockColor} className="block">
      <div className="width">{props.children}</div>
    </div>
  );
};

export default Block;
