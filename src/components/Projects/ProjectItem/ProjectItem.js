import React from "react";
import style from './ProjectItem.module.scss'
import b from "../../../common/styles/ButtonStyle.module.css"
import t from '../../../common/styles/Title.module.css'


export const ProjectItem = (props) => {

    return (
        <div className={style.container}>
            <div className={style.viewProject} style={props.style}>
                <button className={b.button}>
                    <a href={props.refer}>
                        VIEW
                    </a>
                </button>
            </div>
            <h4 className={t.title}>{props.projectTitle}</h4>
            <div className={style.description}>{props.projectDescription}</div>
        </div>

    )
}