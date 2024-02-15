import React from "react";
import s from "./home.module.css";
import City from "../../City/city";
import Card from "../../Card/card";
import Suggestion from "../../Suggestion/suggestion";
import NewInfoModal from "../../NewInfoModal/newInfoModal";
import Slider from "../../Slider/slider";
import Search from "../../Search/search";
import Skeleton from "../../Skeleton/skeleton";
import FiltersMenu from "../../FiltersMenu/filtersMenu";
import NotFound from "../../NotFound/notFound";

const Home = ({
  infoAdded,
  setInfoAdded,
  addToFavorites,
  removeFromFavorites,
  buildingsList,
}) => {
  const [filtersIsOpen, setFilterIsOpen] = React.useState(false);
  const [material, setMaterial] = React.useState("");
  const [isSuggested, setIsSuggested] = React.useState(false);

  const sentButtonHandler = () => {
    setIsSuggested(false);
    setInfoAdded(true);
  };

  const [searchValue, setSearchValue] = React.useState("");

  const filteredCard = buildingsList.filter((card) =>
    card.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const [isLoading, setIsLoading] = React.useState(true);
  const [strip, setStrip] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    setTimeout(() => {
      setStrip(false);
    }, 5000);
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
        <div className={strip ? s.white_strip : s.strip_none}></div>
      </div>
      <div className={s.content}>
        <button className={s.filters} onClick={() => setFilterIsOpen(true)}>
          <p className={s.filters_text}>Фильтры</p>
        </button>
        <div>
          <h2 className={s.title_slider}>Распространенные серии домов</h2>
          <Slider buildingsList={buildingsList} />
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
          {!filteredCard.length ? (
            <NotFound />
          ) : (
            filteredCard
              .filter((el) => (material ? el.material === material : el))
              .map((el) =>
                isLoading ? (
                  <Skeleton key={el.id} />
                ) : (
                  <Card
                    key={el.id}
                    id={el.id}
                    title={el.name}
                    img={el.images}
                    inFavorites={el.inFavorites}
                    addToFavorites={addToFavorites}
                    removeFromFavorites={removeFromFavorites}
                  />
                )
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
