import React from "react";
import s from "./filtersMenu.module.css";

const FiltersMenu = ({ setFilterIsOpen, setMaterial }) => {
  return (
    <div className={s.menu}>
      <h2 className={s.title}>Выберите фильтр</h2>
      <button className={s.btn} onClick={() => setFilterIsOpen(false)}>
        X
      </button>
      <div className={s.filters}>
        <h3 className={s.filter} onClick={() => setMaterial("панельный")}>
          Панельные
        </h3>
        <h3 className={s.filter} onClick={() => setMaterial("блочный")}>
          Блочные
        </h3>
        <h3 className={s.filter} onClick={() => setMaterial("кирпичный")}>
          Кирпичные
        </h3>
      </div>
      <button className={s.btn_reset} onClick={() => setMaterial("")}>
        Сбросить фильтр
      </button>
    </div>
  );
};

export default FiltersMenu;
