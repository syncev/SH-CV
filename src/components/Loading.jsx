import React, { useState, useEffect } from "react";
import SkewLoader from "react-spinners/SkewLoader";

const Loading = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.isLoaded ? setIsLoaded(true) : setIsLoaded(false);
  }, [document.isLoaded]);
  

  return (
    
      <h1 className="titleFont">Loading...</h1>

  );
};

export default Loading;
