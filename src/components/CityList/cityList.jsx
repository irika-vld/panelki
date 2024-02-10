import React from "react";
import { cities } from "../../assets/data";
import s from "./cityList.module.css";
import { Link } from "react-router-dom";

const CityList = () => {
  const sortedCities = cities.sort((a, b) => (a.name > b.name ? 1 : -1));

  return (
    <div className={s.container}>
      <ul className={s.list}>
        {sortedCities.map((el) => (
          <Link
            key={el.id}
            style={{ textDecoration: "none" }}
            to={`/city/${el.id}`}
          >
            <li className={s.city}>{el.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default CityList;
