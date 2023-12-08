import Block from "../../Components/ReusableComponents/Block";
import Footer from "../../Components/Footer";
import HeaderMenu from "../../Components/HeaderMenu";
import Menu from "../../Components/Menu";
import Contact from "../../Components/Contact";

const MenuPage = () => {
  return (
    <>
      {/* <HeaderMenu /> */}
      <Block>
        <Menu />
      </Block>
      <Contact />
      <Footer />
    </>
  );
};

export default MenuPage;
