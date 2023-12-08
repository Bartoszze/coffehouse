import Headline from "../ReusableComponents/Headline";
import Button from "../ReusableComponents/Button";
import Text from "../ReusableComponents/Text";
import "./index.sass";

const Header = () => {
  return (
    <div className="center">
      <Headline h="h1" text="NASZA KAWA" />
      <Headline h="h2" text="TWÓJ UŚMIECH" />
      <Text
        color="#d8a68a"
        text="Tworzymy dla was miejsce, gdzie każdy łyk to podróż w aromatyczne zakątki."
      />
      <Button text="Sprawdź nasze menu" />
    </div>
  );
};

export default Header;
