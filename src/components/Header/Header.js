import React from 'react';
import style from './Header.module.css';
import {HashLink as Link} from "react-router-hash-link";


function Header() {

    return (
        <header className={style.header}>
            <div className={style.nav}>
                <Link to={'/main#main'}> Main </Link>
                <Link to={'/skills#skills'}> Skills </Link>
                <Link to={'/projects#projects'}> Projects </Link>
                <Link to={'/contacts#contacts'}> Contacts </Link>
            </div>
        </header>
    );
}

export default Header;