import React from "react"
import style from "./Skill.module.css"

type PropsType = {
	skills: string
	progressValue: string
	icon: string
}
export const Skill: React.FC<PropsType> = ({skills, progressValue, icon}) => {
	return (
		<div className={style.wrapperSkill}>
			<div className={style.iconLog}>
				<img src={icon} alt="#"/>
				<h3 className={style.titleH3}>{skills}</h3>
			</div>
			<div className={style.progress}>
				<div className={style.progressBar} style={{width: progressValue + "%"}}><span>{progressValue}%</span></div>
			</div>
		</div>
	);
}