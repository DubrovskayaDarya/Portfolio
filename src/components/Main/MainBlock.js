import React from 'react';
import style from './MainBlock.module.css';
import me from '../../common/images/photo_2022-03-14_23-42-14.jpg'

function MainBlock() {
    return (
        <div id={'main'} className={style.mainBlock}>
            <div className={style.greetingBlock}>
                <div className={style.greetingText}>
                    <h2>DUBROVSKAYA</h2>
                    <span>Front-End Developer</span>
                </div>
                <div className={style.avatar}>
                    <img src={me}/>
                </div>
            </div>
        </div>
    );
}

export default MainBlock;