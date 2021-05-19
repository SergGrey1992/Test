import React from 'react';
import style from "./Scroll_icon.module.css"

export function ScrollIcon() {
	return (
		<div>
			<div className={style.scrollMouse}>
				<div className={style.scrollTo}>
					<a href="#1">
						<div className={style.chevron}></div>
						<div className={style.chevron}></div>
						<div className={style.chevron}></div>
					</a>
					<span className={style.spanText}>Scroll down</span>
				</div>
			</div>
		</div>
	);
}