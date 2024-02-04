import React from "react";
import { panelki } from "../../assets/data";
import { useParams } from "react-router-dom";
import s from "./buildingInfo.module.css";
import ModalPhoto from "../ModalPhoto/modalPhoto";

const BuildingInfo = () => {
  const { title, id } = useParams();
  const building = panelki.filter((el) => el.id === Number(id))[0];
  const [isOpen, setIsOpen] = React.useState(false);
  const [activePhoto, setActivePhoto] = React.useState("");

  const clickPhotoHandler = (src) => {
    setIsOpen(true);
    setActivePhoto(src);
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
      <div className={s.wrapper}>
        <h2>{title}</h2>
        <div className={s.photo_block}>
          {building.images.map((el, index) => (
            <img
              key={index}
              className={s.photo}
              src={el}
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
            {building.plans.map((el, index) => (
              <img
                key={index}
                className={s.photo_plan}
                src={el}
                alt="планировка"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BuildingInfo;
