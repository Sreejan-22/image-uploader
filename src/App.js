import { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Uploading from "./components/Uploading/Uploading";
import UploadSuccess from "./components/UploadSuccess/UploadSuccess";

function App() {
  const [loading, setLoading] = useState(0);
  const [imgUrl, setImgUrl] = useState(null);
  // it would have 3 values - 0 for Home component, 1 for Uploading component, 2 for UploadSuccess component
  return (
    <div className="parent-container">
      {loading === 0 ? (
        <Home setLoading={setLoading} setImgUrl={setImgUrl} />
      ) : null}
      {loading === 1 ? <Uploading /> : null}
      {loading === 2 ? <UploadSuccess imgUrl={imgUrl} /> : null}
    </div>
  );
}

export default App;
