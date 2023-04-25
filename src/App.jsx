import "./App.css";
import Navbar from "./components/Navbar";
import Aboutpage from "./pages/Aboutpage";
import Donatepage from "./pages/Donatepage";
import Homepage from "./pages/Homepage";
import Shirtspage from "./pages/Shirtspage";
import Pantspage from "./pages/Pantspage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="donate" element={<Donatepage />} />
        <Route path="about" element={<Aboutpage />} />
        <Route path="/">
          <Route path="/shirts" element={<Shirtspage />} />
          <Route path="/pants" element={<Pantspage />} />
        </Route>
        {/* <Route
          path="/"
          element={
            <Routes>
              <Route path="shirts" element={<Shirtspage />} />
              <Route path="pants" element={<Pantspage />} />
            </Routes>
          }
        /> */}
      </Routes>
    </>
  );
}

export default App;
