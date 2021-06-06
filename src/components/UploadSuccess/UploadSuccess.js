import "./UploadSuccess.css";
// import done from "../../assets/done.svg";
import SuccessIcon from "./SuccessIcon";
import { useEffect, useState } from "react";

const UploadSuccess = ({ imgUrl }) => {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <div className="upload-success-box">
      <SuccessIcon />
      <div className="upload-success-text">Uploaded Successfully!</div>
      {/* https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&  ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80 */}
      <img src={imgUrl} alt="" className="uploaded-img" />
      <form className="img-link-container">
        <input
          type="text"
          readOnly
          value={`  ${imgUrl}`}
          className="url-text-input"
        />
        <button
          className="copy-btn"
          onClick={(e) => {
            e.preventDefault();
            setShowAlert(true);
            setTimeout(() => {
              setShowAlert(false);
            }, 2000);
            navigator.clipboard.writeText(imgUrl);
          }}
        >
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
