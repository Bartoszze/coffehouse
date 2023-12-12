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
      <div className="information__left">
        <img src={props.img} alt="kawiarnia" />
      </div>
      <div className="information__right">
        <Headline h="h2" text={props.headline} />
        <Text color="#a57053" text={props.text} />
        <Button text={props.button} />
      </div>
    </div>
  );
};

export default Information;
