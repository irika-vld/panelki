import React from "react";
import Card from "../Card/card";
import s from "./favorites.module.css";

const Favorites = ({ favorites = [], favoritesHandler }) => {
  return (
    <div className={s.favorites_block}>
      <h2>Favorites</h2>
      <div className={!favorites.length ? s.noFavorites : s.cards}>
        {!favorites.length ? (
          <p>В избранное пока ничего не добавлено</p>
        ) : (
          favorites.map((el) => (
            <Card
              key={el.id}
              id={el.id}
              title={el.name}
              img={el.images}
              inFavorites={el.inFavorites}
              favoritesHandler={favoritesHandler}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Favorites;
