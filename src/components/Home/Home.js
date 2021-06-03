import "./Home.css";
import image from "../../assets/image.svg";

const Home = () => {
  return (
    <div className="img-upload-box">
      <div className="img-upload-box-heading">Upload your image</div>
      <div className="img-upload-box-subtitle">File should be JPEJ or PNG</div>
      <div className="img-upload-stage-container">
        <div className="img-upload-stage">
          <img src={image} alt="" className="placeholder-img" />
          <div className="img-upload-stage-text">
            Drag and drop your image here
          </div>
        </div>
      </div>
      <div className="or-class">Or</div>
      <div className="upload-button-container">
        <button className="upload-button">
          <span className="upload-button-text">Choose a file</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
