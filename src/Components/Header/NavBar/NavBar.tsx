import React, {useState} from 'react';
import style from "./NavBar.module.css"
import {Menu} from "./Menu/Menu";

export type itemsType = {
	id: number
	value: string
	href: string
}

export function NavBar() {
	const [menuActive, setMenuActive] = useState(false)
	const items: Array<itemsType> = [
		{id: 1, value: "Главная", href: "#"},
		{id: 2, value: "Skills", href: "#1"},
		{id: 3, value: "Jobs", href: "#2"},
		{id: 4, value: "Contacts", href: "#3"},
	]
	return (
		<div className={style.navBar}>
			<div className={style.burgerBtn} onClick={() => setMenuActive(!menuActive)}>
				<span/>
			</div>
			<Menu items={items} active={menuActive} setActive={setMenuActive}/>
		</div>
	);
}


