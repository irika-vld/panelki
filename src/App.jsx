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

  const favoritesHandler = React.useCallback(
    (cardId, action = "add") => {
      setBuildingsList((prev) => {
        const cardInFav = prev.map((el) => {
          if (el.id === cardId) {
            el.inFavorites = action === "add" ? true : false;
          }
          return el;
        });

        return [...cardInFav];
      });
      if (action === "add") {
        setFavoritesList([
          ...favoritesList,
          buildingsList.find((el) => el.id === cardId) || {},
        ]);
      }
      if (action === "delete") {
        setFavoritesList([
          ...(favoritesList.filter((el) => el.id !== cardId) || {}),
        ]);
      }
    },
    [buildingsList, favoritesList]
  );

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
                favoritesHandler={favoritesHandler}
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
                favoritesHandler={favoritesHandler}
                buildingsList={buildingsList}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                favorites={favoritesList}
                favoritesHandler={favoritesHandler}
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
