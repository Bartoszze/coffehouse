import "./index.sass";
import Headline from "../ReusableComponents/Headline";
import img1 from "../../Assets/Images/insta1.png";
import img2 from "../../Assets/Images/insta2.png";
import img3 from "../../Assets/Images/insta3.png";
import img4 from "../../Assets/Images/insta4.png";
import img5 from "../../Assets/Images/insta5.png";
import img6 from "../../Assets/Images/insta6.png";

const Gallery = () => {
  return (
    <div
      className="gallery"
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
    >
      <Headline h="h2" text="INSTAGRAM" />
      <div className="gallery__insta">
        <img alt="coffe" src={img1} />
        <img alt="coffe" src={img2} />
        <img alt="coffe" src={img3} />
        <img alt="coffe" src={img4} />
        <img alt="coffe" src={img5} />
        <img alt="coffe" src={img6} />
      </div>
    </div>
  );
};

export default Gallery;
