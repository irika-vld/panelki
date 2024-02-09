import React from "react";
import s from "./header.module.css";
import { Link } from "react-router-dom";

const Header = ({ isOpen }) => {
  return (
    <header className={s.header}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className={isOpen ? s.logo_none : s.logo_block}>
          <img
            className={s.logo}
            src="https://cdn.icon-icons.com/icons2/1363/PNG/512/travel-holiday-vacation-327_89074.png"
            alt="логотип"
          />
          <h2 className={s.title}>панельки</h2>
        </div>
      </Link>
    </header>
  );
};

export default Header;
