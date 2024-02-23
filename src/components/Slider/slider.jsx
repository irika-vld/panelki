import React from "react";
import s from "./slider.module.css";

const Slider = ({ buildingsList }) => {
  const filtredBuildings = buildingsList
    .filter((el) => el.type === "popular")
    .map((el) => el.images);
  const images = filtredBuildings.map((el) => el.map((el) => el.img));
  const image = images.map((el) => el[0]);

  const sliderRef = React.useRef(null);

  const prevHandler = () => (sliderRef.current.scrollLeft -= 750);
  const nextHandler = () => (sliderRef.current.scrollLeft += 750);

  return (
    <div className={s.container}>
      <div className={s.content}>
        <button className={s.prev} onClick={prevHandler}>
          <img
            src="https://cdn.icon-icons.com/icons2/1134/PNG/512/1486348816-arrow-back-backwards-repeat-previous-blue_80479.png"
            alt="назад"
            width={50}
            height={50}
          />
        </button>
        <div className={s.slider} ref={sliderRef}>
          {image.map((el, index) => (
            <img className={s.img} key={index} src={el} alt="здание" />
          ))}
        </div>
        <button className={s.next} onClick={nextHandler}>
          <img
            src="https://cdn.icon-icons.com/icons2/1134/PNG/512/1486348813-music-forward-front-next-arrow-blue_80474.png"
            alt="вперед"
            width={50}
            height={50}
          />
        </button>
      </div>
    </div>
  );
};

export default Slider;
