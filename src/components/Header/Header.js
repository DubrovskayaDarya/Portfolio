import React from 'react';
import style from './Header.module.scss';


export const Header = () => {

    const onClickHandler = (id) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({block: "start", behavior: 'smooth'});
    }

    return (
        <header className={style.header}>
            <div className={style.nav}>
                <a onClick={() => onClickHandler("main")}>Main</a>
                <a onClick={() => onClickHandler("projects")}>Projects</a>
                <a onClick={() => onClickHandler("skills")}>Skills</a>
                <a onClick={() => onClickHandler("contacts")}>Contacts</a>
            </div>
        </header>
    );
}