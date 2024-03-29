import AsideBlock from "../ReusableComponents/AsideBlock";
import coffe from "../../Assets/Images/image7.svg";
import cup from "../../Assets/Images/image8.svg";
import beans from "../../Assets/Images/image9.svg";
import "./index.sass";

const Aside = () => {
  return (
    <div className="width">
      <div className="stat">
        <AsideBlock
          headline="Filiżanka kawy"
          text="Nasza wyrafinowana filiżanka kawy - wyjątkowy smak w każdym łyku, to to, co oferujemy na każdym etapie Twojego dnia."
          image={coffe}
          delay="150"
        />
        <AsideBlock
          headline="Na wynos"
          text=" Z naszym kubkiem na wynos zawsze jesteśmy z Tobą, niezależnie od tego, czy to jest poranek w domu czy aktywny dzień w mieście."
          image={cup}
          delay="250"
        />
        <AsideBlock
          headline="Aromat"
          text="Nasze świeżo palone ziarna kawy, dostarczane prosto od źródła, gwarantują, że Twój kubek zawsze będzie pełen wyjątkowego aromatu."
          image={beans}
          delay="350"
        />
      </div>
    </div>
  );
};

export default Aside;
