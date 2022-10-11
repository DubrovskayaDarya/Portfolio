import React from "react";
import style from './Contacts.module.scss'

export const PersonalContacts = (props) => {

    return (
        <div className={style.personalContacts}>
            <img className={style.icon} src={props.icon}/>
            <h5>{props.info}</h5>
        </div>
    )
}