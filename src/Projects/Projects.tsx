import React from 'react';
import style from './Projects.module.css';
import styleContainer from "../common/styles/Container.module.css";
import {Project} from "./Project/Project";


const socialNetworkDescription = 'Study project with React, Redux, JEST.'
const todoListDescription = 'Study project with React, Redux, JEST, Material UI.'
const counterDescription = 'Study project with React and Redux'

export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer} `}>
                <h2 className={style.title}>My Projects</h2>
                <div className={style.projects}>
                    <Project title={'Social Network'}
                             description={socialNetworkDescription}/>
                    <Project title={'TODO List'}
                             description={todoListDescription}/>
                    <Project title={'Counter'}
                             description={counterDescription}/>


                </div>
            </div>
        </div>
    )
}