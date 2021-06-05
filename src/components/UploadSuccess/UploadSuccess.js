import "./UploadSuccess.css";
// import done from "../../assets/done.svg";
import SuccessIcon from "./SuccessIcon";

const UploadSuccess = () => {
  return (
    <div className="upload-success-box">
      <SuccessIcon />
      <div className="upload-success-text">Uploaded Successfully!</div>
      {/* <div className="uploaded-img">
        <div style={{height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
          <div style={{color: "#cccccc", fontWeight: "500"}}>Image Preview</div>
        </div>
      </div> */}
      <img
        src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
        alt=""
        className="uploaded-img"
      />
      <div className="img-link-container"></div>
    </div>
  );
};

export default UploadSuccess;
