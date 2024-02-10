import React from "react";
import s from './footer.module.css'

const Footer = () => {
  return (
    <footer className={s.footer}>
      <p className={s.text}>
        2023. Все изображения и информация взяты из интернет-источников
      </p>
      <p className={s.text}>Для вопросов и предложений: email@email.ru</p>
    </footer>
  );
};

export default Footer;
