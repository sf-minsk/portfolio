import React from 'react';
import style from './Main.module.css';
import styleContainer from './../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi, i'm</span>
                    <h1>Alexander Padenkov</h1>
                    <p>junior front-end developer</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    )
}