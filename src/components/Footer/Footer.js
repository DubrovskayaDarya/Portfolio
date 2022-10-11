import React from "react";
import style from './Footer.module.scss'
import t from '../../common/styles/Title.module.css'

export const Footer = () => {

    return (
        <footer className={style.container}>
            <div className={style.footerBlock}>
                <h2 className={t.title}> Dubrovskaya Darya </h2>
                <div className={style.iconsBlock}>
                    <a href={'https://www.linkedin.com/in/darya-dubrovskaya-067a9b246/'}><img className={style.icon}
                                                                                              src={'https://cdn4.iconfinder.com/data/icons/social-media-outline-3/60/Social-35-Linkedin-Outline-512.png'}/></a>
                    <a href={'https://www.instagram.com/mrsdubrovskaya/'}><img className={style.icon}
                                                                               src={'https://img.icons8.com/ios/500/instagram-new--v1.png'}/></a>
                </div>
                <span> 2022 All rights reserved</span>
            </div>
        </footer>
    )
}