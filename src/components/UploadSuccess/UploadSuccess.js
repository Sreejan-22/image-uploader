import "./UploadSuccess.css";
// import done from "../../assets/done.svg";
import SuccessIcon from "./SuccessIcon";
import { useState } from "react";

const UploadSuccess = ({ imgUrl }) => {
  const [showAlert, setShowAlert] = useState(false);

  function copyUrl(e) {
    e.preventDefault();
    navigator.clipboard
      .writeText(imgUrl)
      .then(() => {
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 2000);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="upload-success-box">
      <SuccessIcon />
      <div className="upload-success-text">Uploaded Successfully!</div>
      <img src={imgUrl} alt="" className="uploaded-img" />
      <form className="img-link-container">
        <input
          type="text"
          readOnly
          value={`  ${imgUrl}`}
          className="url-text-input"
        />
        <button className="copy-btn" onClick={(e) => copyUrl(e)}>
          Copy Link
        </button>
      </form>
      <div style={{ display: showAlert ? "block" : "none", fontSize: "12px" }}>
        Image URL Copied
      </div>
    </div>
  );
};

export default UploadSuccess;
