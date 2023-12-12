import Block from "../../Components/ReusableComponents/Block";
import Footer from "../../Components/Footer";
import Menu from "../../Components/Menu";
import Contact from "../../Components/Contact";

const MenuPage = () => {
  return (
    <div className="menuPage">
      <Block>
        <Menu />
      </Block>
      <Contact />
      <Footer />
    </div>
  );
};

export default MenuPage;
