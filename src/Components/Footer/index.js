import "./index.sass";
import Headline from "../ReusableComponents/Headline";
import Text from "../ReusableComponents/Text";

const Footer = () => {
  const color = "#FF9B53";
  return (
    <div className="footer">
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
      <div className="footer__block" />

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
  );
};

export default Footer;
