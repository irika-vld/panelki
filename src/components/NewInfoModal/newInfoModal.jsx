import React from "react";
import s from "./newInfoModal.module.css";

const NewInfoModal = ({ setInfoAdded, infoAdded }) => {

  return (
    <div className={s.addInfo_block}>
      <div className={s.success}>
        <h2>Спасибо за информацию</h2>
        <img
          className={s.img}
          src="https://cdn.icon-icons.com/icons2/2854/PNG/512/list_check_checklist_checkmark_icon_181579.png"
          alt="галочка"
        />
      </div>
      <p className={s.info}>
        Она будет опубликована в случае успешной проверки модератором
      </p>
      <button className={s.close} onClick={() => setInfoAdded(!infoAdded)}>
        X
      </button>
    </div>
  );
};

export default NewInfoModal;
