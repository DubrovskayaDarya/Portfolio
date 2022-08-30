import React from "react";
import style from './ProjectItem.module.css'
import b from "../../../common/styles/ButtonStyle.module.css"
import t from '../../../common/styles/Title.module.css'


export const ProjectItem = (props) => {

    return (
        <div className={style.container}>
            <div className={style.viewProject}>
                <button className={b.button} onClick={() => {}}> VIEW </button>
            </div>
            <h4 className={t.title}>{props.projectTitle}</h4>
            <div className={style.description}>{props.projectDescription}</div>
        </div>
    )
}