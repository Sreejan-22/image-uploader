import "./Home.css";
import image from "../../assets/image.svg";

const url = "https://api.cloudinary.com/v1_1/dv0oywqil/image/upload";

const Home = ({ setLoading, setImgUrl }) => {
  function handleSubmit(e) {
    setLoading(1);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "iyfn0cqh");

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
        <label htmlFor="img-upload" className="upload-button">
          <span className="upload-button-text">Choose a file</span>
          {/* Choose a file */}
        </label>
        <input
          type="file"
          accept="image"
          id="img-upload"
          onChange={(e) => handleSubmit(e)}
        />
      </div>
    </div>
  );
};

export default Home;
