import "./App.css";
import Navbar from "./components/Navbar";
import Aboutpage from "./pages/Aboutpage";
import Donatepage from "./pages/Donatepage";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes path="/">
        <Route path="/" element={<Homepage />} />
        <Route path="donate" element={<Donatepage />} />
        <Route path="about" element={<Aboutpage />} />
      </Routes>
      <Navbar />
    </>
  );
}

export default App;
