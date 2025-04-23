import React, { useState, useEffect, lazy, createContext } from "react";



import Myprojects from "./Myprojects";

import Certificates from "./Certificates";
import Navbar from "./Navbar";
import Greeting from "./Greeting";
import AboutMe from "./AboutMe";
import Contact from "./Contact";

export const LanguageContext = createContext("en")



const Welcome = () => {
  
  const [languageValue, setLanguageValue] = useState('en');
  
  // useEffect(() => {
  //   console.log(testValue)
  // }, [testValue])
  

  return (
    <LanguageContext.Provider value={{
      languageValue, 
      setLanguageValue
      }}>
    <div className="page-wrapper">
      <Navbar />
      <Greeting />
      <AboutMe/>
      <Certificates/>
      <Myprojects />
      <Contact/>
    </div>
    </LanguageContext.Provider>
  );
};

export default Welcome;
