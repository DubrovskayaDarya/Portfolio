import React from 'react';
import style from './SkillsBlock.module.css';
import SkillItem from "./SkillItem/SkillItem"
import t from '../../common/styles/Title.module.css'
import reduxIcon from './../../common/icons/redux-icon.svg'
import cssIcon from './../../common/icons/css-icon.svg'

function SkillsBlock() {
    return (
        <div className={style.skillsBlock}>
            <div className={style.skills}>
                <h2 className={t.title}>MY SKILLS</h2>
                <div className={style.skillsItems}>
                    <SkillItem name={'React'} description={'JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов'} logo={'https://www.svgrepo.com/show/327388/logo-react.svg'}/>
                    <SkillItem name={'JavaScript'} description={'Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript.'} logo={'https://www.svgrepo.com/show/327372/logo-javascript.svg'}/>
                    <SkillItem name={'Redux'} description={'Библиотека для JavaScript с открытым исходным кодом, предназначенная для управления состоянием приложения'} logo={reduxIcon}/>
                    <SkillItem name={'CSS'} description={'Язык описания внешнего вида документа, написанного с использованием языка разметки'} logo={cssIcon}/>
                </div>
            </div>
        </div>
    );
}

export default SkillsBlock;