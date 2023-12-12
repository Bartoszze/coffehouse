import "./index.sass";
import photo1 from "../../Assets/Images/insta4.png";
import photo2 from "../../Assets/Images/insta5.png";
import photo3 from "../../Assets/Images/insta6.png";
import photo7 from "../../Assets/Images/insta1.png";
import photo8 from "../../Assets/Images/insta2.png";
import photo9 from "../../Assets/Images/insta3.png";

const Gallery = () => {
  return (
    <div className="width">
      <div className="gallery" id="galeria">
        <img src={photo1} alt="gallery" />
        <img src={photo2} alt="gallery" />
        <img src={photo3} alt="gallery" />
        <img src={photo7} alt="gallery" />
        <img src={photo8} alt="gallery" />
        <img src={photo9} alt="gallery" />
      </div>
    </div>
  );
};

export default Gallery;
