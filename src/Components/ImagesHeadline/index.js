import "./index.sass";
import img1 from "../../Assets/Images/img1.png";
import img2 from "../../Assets/Images/img2.png";
import img3 from "../../Assets/Images/img3.png";

const ImagesHeadline = () => {
  return (
    <div className="imagesHeadline">
      <img src={img1} alt="Coffe" />
      <img src={img2} alt="Coffe" />
      <img src={img3} alt="Coffe" />
    </div>
  );
};

export default ImagesHeadline;
