import React from "react"
import style from "./MyWorks.module.css"
import {Work} from "./Work/Work";
import {Heading} from "../Heading/Heading";
import todoList from "../../assets/images/TodoList.png"
import social from "../../assets/images/Social.png"
import counter from "../../assets/images/Counter.png"


export function MyWorks() {
	const todoListsImg = {
		backgroundImage: 'url(' + todoList + ')',
		href: 'https://github.com/SergGrey1992/TodoList'
	};
	const socialImg = {
		backgroundImage: 'url(' + social + ')',
		href: 'https://github.com/SergGrey1992/Social_network'
	};
	const counterImg = {
		backgroundImage: 'url(' + counter + ')',
		href: 'https://github.com/SergGrey1992/My_Counter'
	};

	return (
		<div className={style.wrapperJobs} id={'2'}>
			<div className={style.container}>
				<div>
					<Heading title={"My Works"}/>
				</div>
				<div className={style.wrapperWorks}>
					<Work title={"Counter"} img={counterImg} href={counterImg.href}/>
					<Work title={"Social Network"} img={socialImg} href={counterImg.href}/>
					<Work title={"Todo List"} img={todoListsImg} href={todoListsImg.href}/>
				</div>
			</div>
		</div>
	);
}