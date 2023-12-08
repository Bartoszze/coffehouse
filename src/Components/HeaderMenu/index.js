import ImgHeader from "../ImgHeader";
import Headline from "../ReusableComponents/Headline";
// import "./index.sass";

const HeaderMenu = () => {
  return (
    <div className="width">
      <div className="menuheader">
        <div className="menuheader__left">
          <Headline h="h2" text="Masz pytanie?" />
        </div>
        <div className="menuheader__right">
          <ImgHeader />
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
