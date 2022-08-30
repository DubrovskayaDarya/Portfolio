import React from 'react';
import style from './Header.module.css';
import {HashLink as Link} from "react-router-hash-link";


function Header() {

    return (
        <header className={style.header}>
            <div className={style.nav}>
                <Link to={'/#main'}> Main </Link>
                <Link to={'/#skills'}> Skills </Link>
                <Link to={'/#projects'}> Projects </Link>
                <Link to={'/#contacts'}> Contacts </Link>
            </div>
        </header>
    );
}

export default Header;