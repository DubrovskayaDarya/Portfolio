import React from 'react';
import style from './Nav.module.css';
import {NavLink} from "react-router-dom";

function Nav() {
    return (
        <nav className={style.nav}>
            <NavLink to={'/main'}>Main</NavLink>
            <NavLink to={'/skills'}>Skills</NavLink>
            <NavLink to={'/projects'}>Projects</NavLink>
            <NavLink to={'/contacts'}>Contacts</NavLink>
        </nav>
    );
}

export default Nav;