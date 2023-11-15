import Headline from "../ReusableComponents/Headline";
import Text from "../ReusableComponents/Text";
import Button from "../ReusableComponents/Button";
import "./index.sass";

const Contact = () => {
  return (
    <div className="contact">
      <Headline h="h2" text="Masz pytanie?" />
      <Text color="#a57053" text="Zostaw nam swojego maila, odezwiemy się!" />
      <input type="text" />
      <Button text="Wyślij" />
    </div>
  );
};

export default Contact;
