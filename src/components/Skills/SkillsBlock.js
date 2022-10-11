import React from 'react';
import style from './SkillsBlock.module.scss';
import t from '../../common/styles/Title.module.css'
import reduxIcon from './../../common/icons/redux-icon.svg'
import cssIcon from './../../common/icons/css-icon.svg'
import typescript from './../../common/icons/typescript-icon.png'
import git from './../../common/icons/git-icon.png'
import sass from '../../common/icons/sass-icon.png'
import {SkillItem} from "./SkillItem/SkillItem";


export const SkillsBlock = () => {
    return (
        <div id={'skills'} className={style.skillsBlock}>
            <div className={style.skills}>
                <h2 className={t.title}> SKILLS </h2>
                <div className={style.skillsItems}>
                    <SkillItem name={'React'} logo={'https://www.svgrepo.com/show/327388/logo-react.svg'}/>
                    <SkillItem name={'JavaScript'} logo={'https://www.svgrepo.com/show/327372/logo-javascript.svg'}/>
                    <SkillItem name={'Redux'} logo={reduxIcon}/>
                    <SkillItem name={'TypeScript'} logo={typescript}/>
                    <SkillItem name={'CSS'} logo={cssIcon}/>
                    <SkillItem name={'Sass'} logo={sass}/>
                    <SkillItem name={'Git'} logo={git}/>
                </div>
            </div>
        </div>
    );
}