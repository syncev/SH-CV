import React, { useState, useEffect, lazy, createContext } from "react";



import Myprojects from "./Myprojects";

import Certificates from "./Certificates";
import Navbar from "./Navbar";
import Greeting from "./Greeting";
import AboutMe from "./AboutMe";
import Contact from "./Contact";

export const TestContext = createContext("en")



const Welcome = () => {
  
  const [testValue, setTestValue] = useState('en');
  
  // useEffect(() => {
  //   console.log(testValue)
  // }, [testValue])
  

  return (
    <TestContext.Provider value={{
      testValue, 
      setTestValue
      }}>
    <div className="page-wrapper">
      <Navbar />
      <Greeting />
      <AboutMe/>
      <Certificates/>
      <Myprojects />
      <Contact/>
    </div>
    </TestContext.Provider>
  );
};

export default Welcome;
