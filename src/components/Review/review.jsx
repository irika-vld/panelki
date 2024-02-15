import React, { memo } from "react";
import s from "./review.module.css";
import { names } from "../../assets/data";

const Review = memo(({ item, name, rating }) => {
  const getRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const randomName = () => {
    const index = Math.floor(Math.random() * (names.length - 1));
    return names[index];
  };

  return (
    <li>
      <div className={s.upper}>
        <p>{name ? name : randomName()}</p>
        <div className={s.rating}>
          <div>{rating ? rating : getRandom(1, 5)}</div>
          <img
            className={s.img}
            src="https://cdn.icon-icons.com/icons2/153/PNG/256/star_favourite_21830.png"
            alt="звезда"
          />
        </div>
      </div>
      {item}
    </li>
  );
});

export default Review;
