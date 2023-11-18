import Headline from "../ReusableComponents/Headline";
import ImagesHeadline from "../ImagesHeadline";
import Button from "../ReusableComponents/Button";
import Text from "../ReusableComponents/Text";
import "./index.sass";

const Header = () => {
  return (
    <div className="center">
      <Headline h="h1" text="NASZA KAWA" />
      <Headline h="h2" text="TWÓJ UŚMIECH" />
      <Text
        color="#9A3B3B"
        text="Tworzymy dla was miejsce, gdzie każdy łyk to podróż w aromatyczne zakątki, a każdy moment spędzony u nas to chwila spokoju i przyjemności."
      />
      <Button text="Sprawdź nasze menu" />
      <ImagesHeadline />
    </div>
  );
};

export default Header;
