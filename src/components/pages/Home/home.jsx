import React from "react";
import s from "./home.module.css";
import City from "../../City/city";
import { panelki } from "../../../assets/data";
import Card from "../../Card/card";
import Suggestion from "../../Suggestion/suggestion";
import NewInfoModal from "../../NewInfoModal/newInfoModal";
import Slider from "../../Slider/slider";
import Search from "../../Search/search";
import Skeleton from "../../Skeleton/skeleton";
import FiltersMenu from "../../FiltersMenu/filtersMenu";

const Home = ({ infoAdded, setInfoAdded }) => {
  const [filtersIsOpen, setFilterIsOpen] = React.useState(false);
  const [material, setMaterial] = React.useState("");
  const [isSuggested, setIsSuggested] = React.useState(false);
  const sentButtonHandler = () => {
    setIsSuggested(false);
    setInfoAdded(true);
  };

  const [searchValue, setSearchValue] = React.useState("");
  const filteredCard = panelki.filter((card) =>
    card.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

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
        <div className={s.white_strip}></div>
      </div>
      <div className={s.content}>
        <div className={s.filters} onClick={() => setFilterIsOpen(true)}>
          <p className={s.filters_text}>Фильтры</p>
        </div>
        <div>
          <h2 className={s.title_slider}>Распространенные серии домов</h2>
          <Slider />
        </div>
        <div>
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
        <div>
          {filtersIsOpen ? (
            <FiltersMenu
              setFilterIsOpen={setFilterIsOpen}
              setMaterial={setMaterial}
            />
          ) : (
            ""
          )}
        </div>
        <div className={s.city_block}>
          <City />
        </div>
        <div className={s.card_block}>
          {filteredCard
            .filter((el) => (material ? el.material === material : el))
            .map((el) =>
              isLoading ? (
                <Skeleton key={el.id} />
              ) : (
                <Card key={el.id} id={el.id} title={el.name} img={el.images} />
              )
            )}
        </div>
        <div className={s.suggestion_block}>
          <button className={s.btn} onClick={() => setIsSuggested(true)}>
            Добавить серию дома
          </button>
          <p>Нажмите, чтобы предложить информацию</p>
        </div>
        {isSuggested ? (
          <Suggestion
            setIsSuggested={setIsSuggested}
            sentButtonHandler={sentButtonHandler}
          />
        ) : (
          ""
        )}
      </div>
      {infoAdded ? <NewInfoModal /> : ""}
    </>
  );
};

export default Home;
