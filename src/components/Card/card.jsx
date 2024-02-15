import React, { memo } from "react";
import s from "./card.module.css";
import { Link } from "react-router-dom";

const Card = memo(
  ({
    title,
    img,
    id,
    addToFavorites,
    removeFromFavorites,
    inFavorites,
  }) => {


    const mainPhoto = img
      .filter((el) => el.tag === "main")
      .map((el) => el.img)[0];

    return (
      <div className={s.card}>
        <Link
          to={`/info/${title}/${id}`}
          style={{ textDecoration: "none", width: "100%" }}
        >
          <img className={s.img} src={mainPhoto} alt="здание" />
          <h3 className={s.title}>{title}</h3>
        </Link>
        <img
          className={inFavorites ? s.favorite : s.unFavorite}
          src={
            inFavorites
              ? "https://cdn.icon-icons.com/icons2/894/PNG/512/Tick_Mark_Dark_icon-icons.com_69147.png"
              : "https://cdn.icon-icons.com/icons2/243/PNG/128/heart-internet_26694.png"
          }
          alt={inFavorites ? "в избранном" : "добавить в избранное"}
          onClick={() =>
            inFavorites
              ? removeFromFavorites(id)
              : addToFavorites(id)
          }
        />
      </div>
    );
  }
);

export default Card;
