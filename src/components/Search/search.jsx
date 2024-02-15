import React from "react";
import s from "./search.module.css";

const Search = ({ searchValue, setSearchValue }) => {
  return (
    <div className={s.input_block}>
      <input
        className={s.input}
        type="text"
        placeholder="Введите серию дома"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <img className={s.search} src="https://cdn.icon-icons.com/icons2/664/PNG/512/construction_project_plan_building_architect_design_develop-94_icon-icons.com_60228.png" alt="лупа" width={27} height={27}/>
    </div>
  );
};

export default Search;
