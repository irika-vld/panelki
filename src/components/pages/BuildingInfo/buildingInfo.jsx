import React from "react";
import { useParams } from "react-router-dom";
import s from "./buildingInfo.module.css";
import ModalPhoto from "../../ModalPhoto/modalPhoto";
import axios from "axios";
import Review from "../../Review/review";
import NewInfoModal from "../../NewInfoModal/newInfoModal";

const BuildingInfo = ({
  isOpen,
  setIsOpen,
  infoAdded,
  setInfoAdded,
  buildingsList,
}) => {
  const { title, id } = useParams();
  const building = buildingsList.filter((el) => el.id === Number(id))[0];
  const [activePhoto, setActivePhoto] = React.useState("");
  const [reviews, setReviews] = React.useState([]);
  const [value, setValue] = React.useState("");
  const [name, setName] = React.useState("");
  const [rating, setRating] = React.useState(5);
  const [isLoading, setIsLoading] = React.useState(false);

  const clickPhotoHandler = (src) => {
    setIsOpen(true);
    setActivePhoto(src);
  };

  const getReviews = () => {
    setIsLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=4")
      .then((res) => {
        const data = res.data;
        setReviews([...reviews, ...data]);
      })
      .catch((err) => {
        alert("Ошибка при получении отзывов");
      })
      .finally(() => setIsLoading(false));
  };

  React.useEffect(() => {
    getReviews();
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const clickSentBtn = (obj) => {
    if (obj.review.length) {
      const userReview = {
        body: obj.review,
        id: new Date(),
        title: obj.name,
        userId: new Date(),
        rating: obj.rating,
        name: obj.name,
      };
      setInfoAdded(true);
      setTimeout(() => {
        setReviews([...reviews, userReview]);
      }, 3000);
    }
  };

  const correctRating = (number) => {
    if (0 < number && number < 6) {
      return number;
    }
  };

  const reviewFromUser = {
    name: name,
    rating: correctRating(rating),
    review: value,
  };

  return (
    <>
      {isOpen && (
        <ModalPhoto
          building={building}
          activePhoto={activePhoto}
          setIsOpen={setIsOpen}
        />
      )}
      <h2>{title}</h2>
      <div className={s.photo_block}>
        {building.images
          .filter((el) => el.tag === "main")
          .map((el, index) => (
            <img
              key={index}
              className={s.photo}
              src={el.img}
              alt="здание"
              onClick={() => clickPhotoHandler(el)}
            />
          ))}
      </div>
      <main className={s.wrapper}>
        <div className={s.info_block}>
          <div className={s.technic}>
            <h2>Технические характеристики</h2>
            <ul className={s.list}>
              {building.specifications.map((el, index) => (
                <li className={s.specifications} key={index}>
                  {el}
                </li>
              ))}
            </ul>
          </div>
          <div className={s.description}>
            <h2>Описание дома</h2>
            <p style={{ margin: "30px" }}>{building.description}</p>
          </div>
        </div>
        <div className={s.plans_block}>
          <h2>Планировки</h2>
          <div className={s.plans}>
            {building.images
              .filter((el) => el.tag === "plan")
              .map((el, index) => (
                <img
                  key={index}
                  className={s.photo_plan}
                  src={el.img}
                  alt="планировка"
                  onClick={() => clickPhotoHandler(el)}
                />
              ))}
          </div>
        </div>
        <div className={s.review_block}>
          <h2>Отзывы жильцов</h2>
          {isLoading ? (
            <p>Загрузка...</p>
          ) : (
            <div className={s.review_description}>
              <ul className={s.review_list}>
                {reviews.map((el) => (
                  <Review
                    key={el.id}
                    item={el.body}
                    name={el.name}
                    rating={el.rating}
                  />
                ))}
              </ul>
            </div>
          )}
          <div className={s.write_review}>
            <p>Напишите свой отзыв об этом доме</p>
            <div>
              <div className={s.name_rating}>
                <div>
                  <p>Ваше имя:</p>
                  <input
                    className={s.input}
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <p>Оценка (от 1 до 5):</p>
                  <input
                    className={s.input}
                    type="number"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    min={1}
                    max={5}
                  />
                </div>
              </div>
              <textarea
                className={s.review_feild}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                name="textarea"
                rows="8"
                cols="70"
                placeholder="Напишите отзыв и укажите ваш e-mail на случай необходимости уточнений"
              />
            </div>
            <button
              className={s.btn}
              onClick={() => clickSentBtn(reviewFromUser)}
            >
              Отправить
            </button>
            {infoAdded && (
              <NewInfoModal setInfoAdded={setInfoAdded} infoAdded={infoAdded} />
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default BuildingInfo;
