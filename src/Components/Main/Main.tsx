import React from 'react';
import style from "./Main.module.css"
import {ScrollIcon} from "../../common/Scroll_icon/Scroll_icon";

export function Main() {
  return (
    <div className={style.mainBlock}>
      <div className={style.container}>
        <div className={style.text}>
          <span>Hi There</span>
          <h2 className={style.h2Text} >
            <span>I am </span>
            <span>Serg </span>
            <span>Dziatkovich</span>
            </h2>
          <div className={style.wrapper}>
            <p>Front-end Developed</p>
          </div>

        </div>
      </div>
      <ScrollIcon/>
    </div>
  );
}


