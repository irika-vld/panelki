import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/header";
import Home from "./components/pages/Home/home";
import BuildingInfo from "./components/pages/BuildingInfo/buildingInfo";
import CityInfo from "./components/pages/CityInfo/cityInfo";
import React from "react";
import Footer from "./components/Footer/footer";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [infoAdded, setInfoAdded] = React.useState(false);

  return (
    <BrowserRouter>
      <main className="wrapper">
        <Header isOpen={isOpen}/>
        <Routes>
          <Route
            path="/"
            element={<Home setInfoAdded={setInfoAdded} infoAdded={infoAdded} />}
          />
          <Route
            path="/info/:title/:id"
            element={
              <BuildingInfo
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                setInfoAdded={setInfoAdded}
                infoAdded={infoAdded}
              />
            }
          />
          <Route path="/city/:id" element={<CityInfo />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
