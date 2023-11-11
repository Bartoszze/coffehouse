import Block from "../../Components/ReusableComponents/Block";
import Information from "../../Components/ReusableComponents/Information";
import Gallery from "../../Components/Gallery";
import Aside from "../../Components/Aside";
import Contact from "../../Components/Contact";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

const HomePage = () => {
  return (
    <>
      <Block color="#F4E5DA">
        <Header />
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
      <Aside />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
