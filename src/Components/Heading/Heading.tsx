import React from "react"
import style from "./Heading.module.css"

type HeadingPropsType = {
	title: string
}

export const Heading:React.FC<HeadingPropsType> = ({title}) => {
	return(
		<div className={style.title} >
			<h2>{title}</h2>
		</div>

)
}
