import Headline from "../Headline";

const AsideBlock = (props) => {
  return (
    <div className="stat__block">
      <img src={props.image} alt={props.headline} />
      <Headline h="h2" text={props.headline} />
      <p>{props.text}</p>
    </div>
  );
};

export default AsideBlock;
