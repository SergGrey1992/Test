import React from 'react';
import style from "./Header.module.css"
import {NavBar} from "./NavBar/NavBar";
import {Logo} from "./NavBar/Logo/Logo";

export function Header() {
  return (
    <div className={style.header}>
      <NavBar/>
      <Logo />
    </div>
  );
}


