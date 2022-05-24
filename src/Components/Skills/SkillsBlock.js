import React from 'react';
import style from './MainBlock.module.css';

function MainBlock() {
    return (
        <div className={style.mainBlock}>
            <div className={style.greetingBlock}>
                <div className={style.greetingText}>
                    <h2>DUBROVSKAYA</h2>
                    <span>FrontEnd Developer</span>
                </div>
                <div className={style.avatar}>
                    <img src={'https://uznayvse.ru/images/catalog/2022/1/alla-pugacheva_48.jpg'}/>
                </div>
            </div>
        </div>
    );
}

export default MainBlock;