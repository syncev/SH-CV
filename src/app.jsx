import Appgallery from "./components/Appgallery";
import Welcome from "./components/Welcome";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";

export function App() {
  return (
    <>
      
      <Routes>
        <Route path="/SH-CV/" element={<Welcome/>} />
        <Route path="/SH-CV/projects" element={<Appgallery/>} />
        <Route path="/SH-CV/about" element={<AboutMe/>} />
        <Route path="/SH-CV/contact" element={<Contact/>} />
        
      
      </Routes>
    </>
  );
}
