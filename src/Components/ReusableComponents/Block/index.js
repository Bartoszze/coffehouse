import "./index.sass";

const Block = (props) => {
  return (
    <div className="block" id={props.id}>
      <div className="width">{props.children}</div>
    </div>
  );
};

export default Block;
