import React, { useEffect } from "react";
import { panelki } from "../../../assets/data";
import { useParams } from "react-router-dom";
import s from "./buildingInfo.module.css";
import ModalPhoto from "../../ModalPhoto/modalPhoto";
import axios from "axios";

const BuildingInfo = () => {
  const { title, id } = useParams();
  const building = panelki.filter((el) => el.id === Number(id))[0];
  const [isOpen, setIsOpen] = React.useState(false);
  const [activePhoto, setActivePhoto] = React.useState("");
  const [reviews, setReviews] = React.useState([]);
  const [value, setValue] = React.useState("");

  const clickPhotoHandler = (src) => {
    setIsOpen(true);
    setActivePhoto(src);
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=4")
      .then((res) => {
        const data = res.data;
        setReviews([...reviews, data]);
      });
  }, []);

  const review = reviews[0];

  return (
    <>
      {isOpen && (
        <ModalPhoto
          building={building}
          activePhoto={activePhoto}
          setIsOpen={setIsOpen}
        />
      )}
      <div className={s.wrapper}>
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
          <div className={s.review_description}>
            <ul className={s.review_list}>
              {review?.map((el) => (
                <li className={s.review} key={el.id}>
                  {el.body}
                </li>
              ))}
            </ul>
          </div>
          <div className={s.write_review}>
            <p>Напиши свой отзыв об этом доме</p>
            <textarea
              className={s.review_feild}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              name="textarea"
              rows="8"
              cols="70"
              placeholder="Write a review of the house"
            />
            <button className={s.btn}>Отправить</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuildingInfo;
