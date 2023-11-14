import "./index.sass";
import img4 from "../../../Assets/Images/img4.png";
import Headline from "../Headline";
import Text from "../Text";
import Button from "../Button";

const Information = (props) => {
  const infoDirection = {
    flexDirection: props.direction ? "row" : "row-reverse",
  };

  return (
    <div style={infoDirection} className="information">
      <div
        className="information__left"
        data-aos-delay="300"
        data-aos="zoom-out"
      >
        <img src={img4} alt="kawiarnia" />
      </div>
      <div
        className="information__right"
        data-aos-delay="500"
        data-aos="zoom-out"
      >
        <Headline h="h2" text="Nasz historia" />
        <Text
          color="#FF9B53"
          text='Kawiarnia "Kawa i Sztuka" to miejsce, gdzie smak i estetyka spotykają się w doskonałym połączeniu. Przytulne wnętrze urządzone w ciepłych, pastelowych kolorach zachęca do relaksu i spędzenia czasu przy pysznej kawie. Oprócz tego, galeria sztuki prezentuje prace lokalnych artystów, co sprawia, że każda wizyta to nie tylko rozkosz dla podniebienia, ale także inspiracja dla duszy. Zapraszamy do odkrycia naszego magicznego miejsca, gdzie kawa staje się sztuką!'
        />
        <Button text="Galeria" />
      </div>
    </div>
  );
};

export default Information;
