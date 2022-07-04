import React from "react";
import style from './Contacts.module.css'
import t from '../../common/styles/Title.module.css'
import b from '../../common/styles/ButtonStyle.module.css'

export const Contacts = () => {

    return (
        <div className={style.container}>
            <div className={style.contactsBlock}>
                <h2 className={t.title}> Contacts </h2>
                <form className={style.formBlock}>
                    <input className={style.input}/>
                    <input className={style.input}/>
                    <textarea className={style.textarea}/>
                </form>
                <button className={b.button_3}> SEND </button>
            </div>

        </div>
    )
}