import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/header";
import Home from "./components/Home/home";
import BuildingInfo from "./components/BuildingInfo/buildingInfo";
import CityInfo from "./components/CityInfo/cityInfo";

function App() {
  
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info/:title/:id" element={<BuildingInfo />} />
          <Route path="/city" element={<CityInfo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
