import Navbar from "./Navbar";
import "./App.css";
import Home from "./pages/Home.js";
import Illustration from "./pages/Illustration";
import GraphicDesign from "./pages/GraphicDesign";
import CharacterDesign from "./pages/CharacterDesign";
import Animation from "./pages/Animation";
//import ThreeD from "./pages/3D";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Navbar />
        <div className="page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/illustration" element={<Illustration />} />
            <Route path="/graphic-design" element={<GraphicDesign />} />
            <Route path="/character-design" element={<CharacterDesign />} />
            <Route path="/animation" element={<Animation />} />
            {
              // <Route path= "/3d" element= {<ThreeD />} />
            }
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
