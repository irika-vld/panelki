import React from "react";
import s from "./city.module.css";
import CityList from "../CityList/cityList";

const City = () => {
  const [listIsOpen, setListIsOpen] = React.useState(false);

  return (
    <div className={s.container}>
      <h2 className={s.title} onClick={() => setListIsOpen(!listIsOpen)}>
        Выбери свой город
      </h2>
      {listIsOpen && <CityList />}
    </div>
  );
};

export default City;
