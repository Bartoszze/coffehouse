import Headline from "../ReusableComponents/Headline";
import Text from "../ReusableComponents/Text";
import cup from "../../Assets/Images/3d.png";
import "./index.sass";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__left">
        <img src={cup} alt="cup of coffe" />
      </div>
      <div className="contact__right">
        <Headline h="h2" text="Masz pytanie?" />
        <Text color="#F9FAFB" text="Zostaw nam swojego maila, odezwiemy się!" />
        <input type="text" />
      </div>
    </div>
  );
};

export default Contact;
