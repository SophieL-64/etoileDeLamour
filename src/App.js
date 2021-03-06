import { Routes, Route } from "react-router-dom";
import Header from "./components/js/Header";
import Home from "./screens/js/HomePage";
import DarkSide from "./screens/js/DarkSide";
import DisplayCard from "./screens/js/DisplayCard";
import Questions from './components/js/Questions.js';
import LightSide from "./screens/js/LightSide";
import Teaser from "./screens/js/Teaser";
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DarkSide" element={<DarkSide />} />
        <Route path="/LightSide" element={<LightSide />} />
        <Route path="/LightSide/:id" element={<DisplayCard />} />
        <Route path="/Teaser" element={<Teaser />} />
        <Route path="/Questions" element={<Questions />} />
      </Routes>
    </div>
  );
}

export default App;