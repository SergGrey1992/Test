import React from 'react';
import style from './Menu.module.css'
import {itemsType} from "../NavBar";

type PropsType = {

  items: Array<itemsType>
  active: boolean
  setActive: (e: any) => void
}

export const Menu:React.FC<PropsType> = ({items, active,setActive}) => {
  return (
    <div className={active ? `${style.wrapperMenu} ${style.active}` : `${style.wrapperMenu}`} onClick={()=> setActive(false)}>
      <div className={style.blur}/>
      <div className={style.menuContent}>
        <ul>
          {items.map((i, index ) =>
            <li key={index}>
              <a href={i.href}>{i.value}</a>
            </li>
          )}
        </ul>
      </div>

    </div>
  );
}


