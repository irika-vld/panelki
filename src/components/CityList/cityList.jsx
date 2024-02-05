import React from "react";
import { cities } from "../../assets/data";
import s from './cityList.module.css'
import { Link } from "react-router-dom";

const CityList = () => {
  return (
    <div className={s.container}>
      <ul className={s.list}>
        {cities.map((el) => (
          <Link style={{ textDecoration: "none" }} to={`/city/${el.id}`}>
            <li className={s.city}>{el.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default CityList;
