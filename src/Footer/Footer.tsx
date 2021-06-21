import React from 'react';
import style from './Footer.module.css';


export const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.container}>
                <span className={style.title}>Alexander Padenkov</span>
                <div className={style.footerForm}>
                    <a href="">XXX</a>
                    <a href="">YYY</a>
                    <a href="">ZZZ</a>
                    <a href="">AAA</a>
                </div>
                <span >&#169; All rights reserved</span>
            </div>
        </div>
    )
}