import "./App.css";
import Home from "./screen/Home";
import { Routes, Route } from "react-router-dom";
import Destination from "./screen/Destination";
import Crew from "./screen/Crew";
import Technology from "./screen/Technology";
import "./Components/styles/Navbar.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
