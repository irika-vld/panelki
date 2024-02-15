import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/header";
import Home from "./components/pages/Home/home";
import BuildingInfo from "./components/pages/BuildingInfo/buildingInfo";
import CityInfo from "./components/pages/CityInfo/cityInfo";
import React from "react";
import Footer from "./components/Footer/footer";
import Favorites from "./components/Favorites/favorites";
import { panelki } from "./assets/data";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [buildingsList, setBuildingsList] = React.useState(panelki);
  const [isOpen, setIsOpen] = React.useState(false);
  const [infoAdded, setInfoAdded] = React.useState(false);

  const [favoritesList, setFavoritesList] = useLocalStorage(
    [],
    "favoritesList"
  );

  const addToFavorites = (cardId) => {
    setBuildingsList((prev) => {
      const cardInFav = prev.map((el) => {
        if (el.id === cardId) {
          el.inFavorites = true;
        }
        return el;
      });

      return [...cardInFav];
    });
    setFavoritesList([
      ...favoritesList,
      buildingsList.find((el) => el.id === cardId) || {},
    ]);
  };

  const removeFromFavorites = (cardId) => {
    setBuildingsList((prev) => {
      const newArr = prev.map((el) => {
        if (el.id === cardId) {
          el.inFavorites = false;
        }
        return el;
      });

      return [...newArr];
    });
    setFavoritesList([...favoritesList.filter((el) => el.id !== cardId) || {}]);
  };

  return (
    <BrowserRouter>
      <main className="wrapper">
        <Header isOpen={isOpen} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setInfoAdded={setInfoAdded}
                infoAdded={infoAdded}
                addToFavorites={addToFavorites}
                removeFromFavorites={removeFromFavorites}
                buildingsList={buildingsList}
              />
            }
          />
          <Route
            path="/info/:title/:id"
            element={
              <BuildingInfo
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                setInfoAdded={setInfoAdded}
                infoAdded={infoAdded}
                buildingsList={buildingsList}
              />
            }
          />
          <Route
            path="/city/:id"
            element={
              <CityInfo
                addToFavorites={addToFavorites}
                removeFromFavorites={removeFromFavorites}
                buildingsList={buildingsList}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                favorites={favoritesList}
                addToFavorites={addToFavorites}
                removeFromFavorites={removeFromFavorites}
                buildingsList={buildingsList}
              />
            }
          />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
