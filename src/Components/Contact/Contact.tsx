import React from "react"
import style from "./Contact.module.css"
import {Heading} from "../Heading/Heading";

export const Contact = () => {
	return (
		<div className={style.wrapperContact} id={'3'}>
			<div className={style.container}>
				<div>
					<Heading title={"Contacts"}/>
				</div>
				<div className={style.formWrapp}>
					<form className={style.formWrapper} >
							<input type="text" name="name" placeholder={"Имя"}/>
							<input type="text" name="name" placeholder={"Фамилия"}/>
							<input type="email" name="email" placeholder={"Email"}/>
							<input type="tel" name="tel" placeholder={"mobile phone"}/>
						<textarea/>
							<input type="submit" value="Отправить"/>
					</form>
				</div>

			</div>
		</div>
	)
}