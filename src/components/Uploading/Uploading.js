import { useEffect, useState } from "react";
import "./Uploading.css";

const Uploading = () => {
  const [loaderPosition, setLoaderPosition] = useState(0);

  useEffect(() => {
    const counter = setInterval(() => {
      if (loaderPosition < 100) {
        setLoaderPosition((prevPos) => (prevPos < 100 ? prevPos + 3 : -20));
      } else {
        setLoaderPosition(0);
      }
    }, 100);

    return () => {
      clearInterval(counter);
    };
  });

  return (
    <div className="uploading-box">
      <div className="uploading-text">Uploading...</div>
      {/* Upload progress bar will be placed here */}
      <div className="loading-strip">
        <div
          className="loading-bar"
          style={{ position: "relative", left: `${loaderPosition}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Uploading;
