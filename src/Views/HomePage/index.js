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
      <Block id="hea">
        <Header />
      </Block>
      <Block>
        <Information />
      </Block>
      <Aside />
      <Block>
        <Information direction={true} />
      </Block>
      <Block id="gal">
        <Gallery />
      </Block>
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
