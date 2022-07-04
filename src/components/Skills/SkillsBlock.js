import React from 'react';
import style from './SkillsBlock.module.css';
import SkillItem from "./SkillItem/SkillItem"
import t from '../../common/styles/Title.module.css'

function SkillsBlock() {
    return (
        <div className={style.skillsBlock}>
            <div className={style.skills}>
                <h2 className={t.title}>MY SKILLS</h2>
                <div className={style.skillsItems}>
                    <SkillItem name={'React'} description={'1 JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов'} logo={'https://www.svgrepo.com/show/327388/logo-react.svg'}/>
                    <SkillItem name={'JavaScript'} description={'2'} logo={'https://www.svgrepo.com/show/327372/logo-javascript.svg'}/>
                    <SkillItem name={'Redux'} description={'3'} logo={'https://cdn.iconscout.com/icon/free/png-256/redux-3445829-2878755.png'}/>
                    <SkillItem name={'CSS'} description={'4'} logo={'http://cdn.onlinewebfonts.com/svg/img_565439.png'}/>
                </div>
            </div>
        </div>
    );
}

export default SkillsBlock;