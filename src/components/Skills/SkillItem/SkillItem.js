import React from "react";
import style from './SkillItem.module.css'
import t from '../../../common/styles/Title.module.css'

function SkillItem(props) {
    return (
        <div className={style.skillItem}>
            <img alt={'skill logo'} className={style.skillIcon} src={props.logo}/>
            <h4 className={t.title}>{props.name}</h4>
            <span className={style.description}>{props.description}</span>
        </div>
    );
}

export default SkillItem;