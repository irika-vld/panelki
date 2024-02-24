import React, { memo } from "react";
import s from "./card.module.css";
import { Link } from "react-router-dom";

const Card = memo(({ title, img, id, favoritesHandler, inFavorites }) => {
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
            ? "https://cdn.icon-icons.com/icons2/935/PNG/512/checkmark-outline_icon-icons.com_73300.png"
            : "https://cdn.icon-icons.com/icons2/494/PNG/512/heart_icon-icons.com_48290.png"
        }
        alt={inFavorites ? "в избранном" : "добавить в избранное"}
        onClick={() => favoritesHandler(id, inFavorites ? "delete" : "add")}
      />
    </div>
  );
});

export default Card;
