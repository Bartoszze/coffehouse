import "./index.sass";

const Wave = (props) => {
  return (
    <div className="wave">
      <div className="width">{props.children}</div>
    </div>
  );
};

export default Wave;
