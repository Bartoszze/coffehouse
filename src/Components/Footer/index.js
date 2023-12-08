import "./index.sass";
import Headline from "../ReusableComponents/Headline";
import Text from "../ReusableComponents/Text";
import logo from "../../Assets/Images/3d.png";

const Footer = () => {
  const color = "#a57053";

  return (
    <div className="footer">
      <div className="width">
        <div className="footer__container">
          <div className="footer__block" id="photo">
            <img src={logo} alt="coffe cup" />
          </div>
          <div className="footer__block">
            <Headline h="h2" text="Kawiarnia" />
            <Headline h="h3" text="Telefon" />
            <Text color={color} text="+222 222 222" />
            <Headline h="h3" text="Adres" />
            <Text color={color} text="ul. Adres 12/3" />
          </div>
          <div className="footer__block">
            <Headline h="h2" text="Social" />
            <Text color={color} text="Instagram" />
            <Text color={color} text="Facebook" />
            <Text color={color} text="Youtube" />
          </div>
          <div className="footer__block">
            <Headline h="h2" text="Godziny otwarcia" />
            <Text color={color} text="Pon. 06:00 - 19:30" />
            <Text color={color} text="Wt. 06:00 - 19:30" />
            <Text color={color} text="Śr. 06:00 - 19:30" />
            <Text color={color} text="Czw. 06:00 - 19:30" />
            <Text color={color} text="Pt. 06:00 - 19:30" />
            <Text color={color} text="Sob. 06:00 - 19:30" />
            <Text color={color} text="Nd. 06:00 - 19:30" />
          </div>
        </div>
        <div className="footer__autor">
          <Headline h="h2" text="© Bartosz Stanek" />
          <Text color={color} text="All rights reserverd." />
        </div>
      </div>
    </div>
  );
};

export default Footer;
