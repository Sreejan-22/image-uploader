import "./App.css";
import Home from "./components/Home/Home";
import Uploading from "./components/Uploading/Uploading";
import UploadSuccess from "./components/UploadSuccess/UploadSuccess";

function App() {
  return (
    <div className="parent-container">
      {/* <Home /> */}
      <Uploading />
    </div>
  );
}

export default App;
