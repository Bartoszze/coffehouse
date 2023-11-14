import Headline from "../ReusableComponents/Headline";
import ImagesHeadline from "../ImagesHeadline";
import Button from "../ReusableComponents/Button";
import "./index.sass";

const Header = () => {
  return (
    <div
      className="center"
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
    >
      <Headline h="h1" text="NASZA KAWA" />
      <Headline h="h2" text="TWÓJ UŚMIECH" />
      <Button text="Sprawdź nasze menu" />
      <ImagesHeadline />
    </div>
  );
};

export default Header;
