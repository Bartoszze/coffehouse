import Block from "../../Components/ReusableComponents/Block";
import Headline from "../../Components/ReusableComponents/Headline";
import ImagesHeadline from "../../Components/ImagesHeadline";
import Button from "../../Components/ReusableComponents/Button";
import Information from "../../Components/ReusableComponents/Information";
import Gallery from "../../Components/Gallery";

const HomePage = () => {
  return (
    <>
      <Block color="#F4E5DA">
        <Headline h="h1" text="NASZA KAWA" />
        <Headline h="h2" text="TWÓJ UŚMIECH" />
        <Button text="Sprawdź nasze menu" />
        <ImagesHeadline />
      </Block>
      <Block color="#F9FAFB">
        <Information />
      </Block>
      <Block color="#F9FAFB">
        <Gallery />
      </Block>
      <Block color="#F9FAFB">
        <Information direction={true} />
      </Block>
    </>
  );
};

export default HomePage;
