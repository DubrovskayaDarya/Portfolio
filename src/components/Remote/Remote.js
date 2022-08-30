import React from "react";
import style from './Remote.module.css'
import t from '../../common/styles/Title.module.css'


export const Remote = () => {

    return (
        <div className={style.container}>
            <div className={style.remoteBlock}>
                <span className={t.title}> CONSIDERING REMOTE WORK </span>
            </div>
        </div>
    )
}