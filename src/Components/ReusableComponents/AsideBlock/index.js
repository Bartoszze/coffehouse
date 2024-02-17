import Headline from "../Headline";

const AsideBlock = (props) => {
  return (
    <div
      className="stat__block"
      data-aos="zoom-in"
      data-aos-delay={props.delay}
    >
      <img src={props.image} alt={props.headline} />
      <Headline h="h2" text={props.headline} />
      <p>{props.text}</p>
    </div>
  );
};

export default AsideBlock;
