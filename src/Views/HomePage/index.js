import Block from "../../Components/ReusableComponents/Block";
import Information from "../../Components/ReusableComponents/Information";
import Gallery from "../../Components/Gallery";
import Aside from "../../Components/Aside";
import Contact from "../../Components/Contact";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import img from "../../Assets/Images/aaaa.png";
import img2 from "../../Assets/Images/aaa.jpg";

const HomePage = () => {
  return (
    <>
      <Block id="hea">
        <Header />
      </Block>
      <Block>
        <Information
          headline="Nasz historia"
          text="Kawiarnia Kawa i Sztuka to miejsce, gdzie smak i estetyka spotykają się w doskonałym połączeniu. Przytulne wnętrze urządzone w ciepłych, pastelowych kolorach zachęca do relaksu i spędzenia czasu przy pysznej kawie. Oprócz tego, galeria sztuki prezentuje prace lokalnych artystów, co sprawia, że każda wizyta to nie tylko rozkosz dla podniebienia, ale także inspiracja dla duszy. Zapraszamy do odkrycia naszego magicznego miejsca, gdzie kawa staje się sztuką!"
          img={img}
        />
      </Block>
      <Aside />
      <Block>
        <Information
          headline="Smak i Estetyka"
          text="Zanurz się w niepowtarzalnym świecie naszej kawiarni, gdzie przytulne wnętrze w ciepłych, pastelowych barwach stworzone jest dla Twojej relaksacji, a aromatyczna kawa doskonale współgra z atmosferą sztuki lokalnych talentów. Nasza galeria prezentuje nie tylko wyjątkowe dzieła, ale także inspiruje, tworząc magiczne miejsce, gdzie każdy łyk kawy staje się jednocześnie doznaniem dla zmysłów i dla duszy. Przyjdź i odkryj, jak kawa może stać się prawdziwą sztuką!"
          img={img2}
          direction={true}
        />
      </Block>
      <Block id="gal">
        <Gallery />
      </Block>
      <div className="width">
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
