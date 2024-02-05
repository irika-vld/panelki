import React from "react";
import s from './modalPhoto.module.css'

const ModalPhoto = ({ building, activePhoto, setIsOpen }) => {
  return (
    <div className={s.modal}>
      {building.images
        .filter((el) => el === activePhoto)
        .map((el, index) => (
          <img key={index} className={s.photo} src={el.img} alt="здание" />
        ))}
      <button className={s.btn_close} onClick={() => setIsOpen(false)}>X</button>
    </div>
  );
};

export default ModalPhoto;
