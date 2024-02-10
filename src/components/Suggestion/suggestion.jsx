import React from "react";
import s from "./suggestion.module.css";

const Suggestion = ({ setIsSuggested, sentButtonHandler }) => {
  return (
    <div className={s.suggestion}>
      <h2 className={s.title}>Заполните форму</h2>
      <div className={s.fields}>
        <div className={s.field}>
          <p>Серия дома (обязательно)</p>
          <textarea
            name="textarea"
            rows="2"
            cols="40"
            maxLength="20"
            required
          />
        </div>
        <div className={s.field}>
          <p>Технические характеристики (обязательно)</p>
          <textarea name="textarea" required />
        </div>
        <div className={s.field}>
          <p>Краткое описание</p>
          <textarea name="textarea" />
        </div>
        <div className={s.field}>
          <p>Города распространения (обязательно)</p>
          <textarea name="textarea" required />
        </div>
        <div className={s.field}>
          <p>Изображения (общий план и планировки)</p>
          <input type="file" multiple accept="image/*" />
        </div>
        <div className={s.field}>
          <p>Ваш e-mail (обязательно)</p>
          <textarea name="textarea" required />
        </div>
      </div>
      <button className={s.close} onClick={() => setIsSuggested(false)}>
        X
      </button>
      <button className={s.btn} onClick={() => sentButtonHandler()}>
        Отправить
      </button>
    </div>
  );
};

export default Suggestion;
