import React, { useState, useEffect } from "react";
import SkewLoader from "react-spinners/SkewLoader";

const Loading = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader-wrapper ${isLoaded ? "hidden" : ""}`}>
      <div className="loader">
      <SkewLoader color="#f1d45e" size={50} />
      <h1 className="titleFont">Loading...</h1>
      </div>
    </div>
  );
};

export default Loading;
