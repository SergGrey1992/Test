import React from "react"
import style from "./Work.module.css"

type PropsType = {
  title:string
  img: object
  href: string
}

export const Work:React.FC<PropsType> = ({title, img, href}) => {

  return (
    <div className={style.wrapperWork} >
      <h3 className={style.titleWork} >{title}</h3>

        <div style={img}  className={style.imgInfo} >
          <button><a href={href}>Code</a></button>

        </div>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur, assumenda consequuntur eius, in minima, praesentium quam quidem quisquam repudiandae sit tenetur totam veritatis. Debitis delectus molestiae nobis rem vero?</p>
    </div>
  );
}