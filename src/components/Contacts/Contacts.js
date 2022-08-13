import React from "react";
import style from './Contacts.module.css'
import t from '../../common/styles/Title.module.css'
import b from '../../common/styles/ButtonStyle.module.css'
import {PersonalContacts} from "./PersonalContacts";
import location from "../../common/icons/location-icon.png"
import email from "../../common/icons/email-icon.png"
import phone from "../../common/icons/phone-icon.png"

export const Contacts = () => {

    return (
        <div className={style.container}>
            <div className={style.contactsBlock}>
                <h2 className={t.title}> Contacts </h2>
                <div className={style.personalBlock}>
                    <PersonalContacts icon={location} info={'Warsaw, Poland'}/>
                    <PersonalContacts icon={email} info={'darya.v.dubrovskaya@gmail.com'}/>
                    <PersonalContacts icon={phone} info={'+48 510 753 557'}/>
                </div>
                <form className={style.formBlock}>
                    <input
                        placeholder={'Name'}
                        type={'text'}
                        name={'your-name'}
                        aria-required={"true"}
                        aria-invalid={"false"}
                        className={style.input}/>
                    <input
                        placeholder={'Email'}
                        type={'text'}
                        name={'your-name'}
                        aria-required={"true"}
                        aria-invalid={"false"}
                        className={style.input}/>
                    <textarea
                        placeholder={'Message'}
                        aria-invalid={"false"}
                        cols={40}
                        rows={10}
                        className={style.textarea}/>
                </form>
                <button type={'submit'} className={b.button}>SEND</button>
            </div>

        </div>
    )
}