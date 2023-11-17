import "./index.sass";
import Headline from "../Headline";
import Text from "../Text";
import Button from "../Button";

const Information = (props) => {
  const infoDirection = {
    flexDirection: props.direction ? "row" : "row-reverse",
  };

  return (
    <div style={infoDirection} className="information">
      <div
        className="information__left"
        data-aos-delay="300"
        data-aos="zoom-out"
      >
        <img src={props.img} alt="kawiarnia" />
      </div>
      <div
        className="information__right"
        data-aos-delay="500"
        data-aos="zoom-out"
      >
        <Headline h="h2" text={props.headline} />
        <Text color="#a57053" text={props.text} />
        <Button text="Galeria" />
      </div>
    </div>
  );
};

export default Information;
