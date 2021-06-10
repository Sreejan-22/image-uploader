import "./Home.css";
import image from "../../assets/image.svg";
require("dotenv").config();

const url = process.env.REACT_APP_UPLOAD_URL;

console.log(url);

const Home = ({ setLoading, setImgUrl }) => {
  function preventDefault(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  // this function is called in response to a change event instead of a submit event
  // so we can do away with the e.preventDefault() statement
  function handleSubmit(file) {
    // e.preventDefault();
    setLoading(1);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setImgUrl(data.url);
      })
      .then(() => setLoading(2))
      .catch((err) => console.log(err));
  }

  return (
    <div className="img-upload-box">
      <div className="img-upload-box-heading">Upload your image</div>
      <div className="img-upload-box-subtitle">File should be JPEJ or PNG</div>
      <div
        className="img-upload-stage-container"
        onDragEnter={(e) => {
          preventDefault(e);
        }}
        onDragEnd={(e) => {
          preventDefault(e);
        }}
        onDragOver={(e) => {
          preventDefault(e);
        }}
        onDrop={(e) => {
          preventDefault(e);
          handleSubmit(e.dataTransfer.files[0]);
        }}
      >
        <div className="img-upload-stage">
          <img src={image} alt="" className="placeholder-img" />
          <div className="img-upload-stage-text">
            Drag and drop your image here
          </div>
        </div>
      </div>
      <div className="or-class">Or</div>
      <div className="upload-button-container">
        <label htmlFor="img-upload" className="upload-button">
          <span className="upload-button-text">Choose a file</span>
          {/* Choose a file */}
        </label>
        <input
          type="file"
          accept="image"
          id="img-upload"
          onChange={(e) => handleSubmit(e.target.files[0])}
        />
      </div>
    </div>
  );
};

export default Home;
