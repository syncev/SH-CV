import Welcome from "./components/Welcome";
import { Route, Routes } from "react-router-dom";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/SH-CV/" element={<Welcome />} />
      </Routes>
    </>
  );
}
