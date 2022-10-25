import React from 'react';
import style from './MainBlock.module.scss';
import me from '../../common/images/myPhoto.jpg'
import {ParticleComponent} from "../subComponents/ParticleComponent";


export const MainBlock = () => {
    return (
        <div id={'main'} className={style.mainBlock}>
            <div className={style.greetingBlock}>
                <div className={style.greetingText}>
                    <h2>DUBROVSKAYA</h2>
                    <span>Front-End Developer</span>
                </div>
                <div className={style.avatar}>
                    <img src={me} alt={'Profile Photo'}/>
                </div>
            </div>
            <ParticleComponent/>
        </div>
    );
}