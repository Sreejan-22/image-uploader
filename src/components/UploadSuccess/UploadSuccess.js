import "./UploadSuccess.css";
import done from "../../assets/done.svg";

const UploadSuccess = () => {
  return (
    <div className="upload-success-box">
      <img src={done} alt="" className="success-icon" />
      <div className="upload-success-text">Uploaded Successfully!</div>
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
