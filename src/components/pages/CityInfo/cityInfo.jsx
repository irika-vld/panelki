import React from "react";
import { useParams } from "react-router-dom";
import { cities } from "../../../assets/data";
import s from "./cityInfo.module.css";
import Card from "../../Card/card";

const CityInfo = ({
  addToFavorites,
  removeFromFavorites,
  buildingsList,
}) => {
  const { id } = useParams();
  const city = cities.filter((el) => el.id === id)[0];
  const filtredPanelki = buildingsList.filter((el) =>
    el.cities.includes(city.name)
  );

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={s.wrapper}>
      <h2 className={s.title}>{city.name}</h2>
      <div className={s.info}>
        <img className={s.photo} src={city.img} alt="город" />
        <div className={s.description_block}>
          <p className={s.description}>{city.about}</p>
        </div>
      </div>
      <div className={s.buildings_block}>
        <h3>{`Распространенные серии домов в городе ${city.name}`}</h3>
        <div className={s.buildings}>
          {filtredPanelki.map((el) => (
            <Card
              key={el.id}
              id={el.id}
              title={el.name}
              img={el.images}
              inFavorites={el.inFavorites}
              addToFavorites={addToFavorites}
              removeFromFavorites={removeFromFavorites}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default CityInfo;
