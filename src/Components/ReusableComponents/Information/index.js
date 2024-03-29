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
        data-aos="zoom-in"
        data-aos-delay="150"
      >
        <img src={props.img} alt="kawiarnia" />
      </div>
      <div
        className="information__right"
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        <Headline h="h2" text={props.headline} />
        <Text color="#a57053" text={props.text} />
        <Button text={props.button} href={props.href} />
      </div>
    </div>
  );
};

export default Information;
