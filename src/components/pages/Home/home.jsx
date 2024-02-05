import React from "react";
import s from "./home.module.css";
import City from "../../City/city";
import { panelki } from "../../../assets/data";
import Card from "../../Card/card";

const Home = () => {

  return (
    <>
      <div className={s.first_block}>
        <img
          className={s.img}
          src="https://pro-dachnikov.com/uploads/posts/2021-10/1633861383_99-p-sovetskie-doma-foto-106.jpg"
          alt="панельки"
        />
        <div className={s.title_block}>
          <h1 className={s.title}>Определи свое место для жизни</h1>
        </div>
      </div>
      <div className={s.content}>
        <div className={s.city_block}>
          <City />
        </div>
        <div className={s.card_block}>
          {panelki.map((el) => (
            <Card key={el.id} id={el.id} title={el.name} img={el.images} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
