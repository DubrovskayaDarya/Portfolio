import React from 'react';
import style from './Nav.module.css';

function Nav() {
    return (
        <div className={style.nav}>
            <a href={'Main'}>Main</a>
            <a href={'Skills'}>Skills</a>
            <a href={'Projects'}>Projects</a>
            <a href={'Contacts'}>Contacts</a>
        </div>
    );
}

export default Nav;