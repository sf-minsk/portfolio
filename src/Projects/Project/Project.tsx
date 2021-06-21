import React from 'react';
import style from './Project.module.css';

type PropsType = {
    title: string
    description: string
}

export const Project = (props: PropsType) => {
    return (
        <div className={style.project}>
            <div className={style.imgContainer}>
                <a className={style.projectButton} href="">OPEN</a>
            </div>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    )
}