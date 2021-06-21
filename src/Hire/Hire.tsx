import React from 'react';
import style from './Hire.module.css';
import styleContainer from "../common/styles/Container.module.css";

export const Hire = () => {
    return (
        <div className={style.hireBlock}>
            <div className={`${styleContainer.container} ${style.hireContainer} `}>
                <div className={style.hire}>
                    <span className={style.title}>Ready to work remotely</span>
                    <a className={style.hireButton} href="">Hire me!</a>
                </div>
            </div>
        </div>
    )
}