import "./index.sass";

const Loader = (props) => {
  return (
    <div className={`loader${props.ready ? " ready" : ""}`}>
      <h1>Ładowanie. . . </h1>
    </div>
  );
};

export default Loader;
