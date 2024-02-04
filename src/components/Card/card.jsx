import React from "react";
import s from "./card.module.css";
import { Link } from "react-router-dom";

const Card = ({ title, img, id }) => {

  const mainPhoto = img.map((el) => el)[0]

  return (
    <Link to={`/info/${title}/${id}`} style={{ textDecoration: "none" }}>
      <div className={s.card}>
        <img className={s.img} src={mainPhoto} alt="здание" />
        <h3 className={s.title}>{title}</h3>
      </div>
    </Link>
  );
};

export default Card;
