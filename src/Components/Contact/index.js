import Headline from "../ReusableComponents/Headline";
import Text from "../ReusableComponents/Text";
import Button from "../ReusableComponents/Button";
import "./index.sass";

const Contact = () => {
  return (
    <div
      className="width"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-sine"
      data-aos-delay="300"
      data-aos-offset="0"
    >
      <div className="contact">
        <Headline h="h2" text="Masz pytanie?" />
        <Text color="#a57053" text="Zostaw nam swojego maila, odezwiemy się!" />
        <input
          type="text"
          aria-label="Kontakt"
          placeholder="adres@poczta.com"
        />
        <Button text="Wyślij" />
      </div>
    </div>
  );
};

export default Contact;
