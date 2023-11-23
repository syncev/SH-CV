import Appgallery from "./components/Appgallery";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";

export function App() {
  return (
    <>
      <Navbar />
      <br />
      <Routes>
        <Route path="/SH-CV/" element={<Welcome/>} />
        <Route path="/SH-CV/projects" element={<Appgallery/>} />
        <Route path="/about" element={<AboutMe/>} />
        <Route path="/contact" element={<Contact/>} />
        
      
      </Routes>
    </>
  );
}
