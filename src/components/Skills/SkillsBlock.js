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
                    <SkillItem name={'React'} description={'Declarative, efficient, and flexible JavaScript library for building user interfaces'} logo={'https://www.svgrepo.com/show/327388/logo-react.svg'}/>
                    <SkillItem name={'JavaScript'} description={'The best known as the scripting language for Web pages'} logo={'https://www.svgrepo.com/show/327372/logo-javascript.svg'}/>
                    <SkillItem name={'Redux'} description={'Library for managing and updating application state'} logo={reduxIcon}/>
                    <SkillItem name={'CSS'} description={'Stylesheet language'} logo={cssIcon}/>
                </div>
            </div>
        </div>
    );
}

export default SkillsBlock;