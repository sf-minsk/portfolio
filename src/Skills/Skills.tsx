import React from 'react';
import style from './Skills.module.css';
import styleContainer from './../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";

const jsDescription = 'JavaScript is high-level, often just-in-time compiled, and multi-paradigm programming language.'
const reactDescription = 'Open-source front-end JavaScript library for building user interfaces or UI components.'
const reduxDescription = 'Open-source JavaScript library for managing application state.'
const typescriptDescription = 'Is a strict syntactical superset of JavaScript and adds optional static typing to the language.'
const jestDescription = 'Is a delightful JavaScript Testing Framework with a focus on simplicity.'
const materialUiDescription = 'React components for faster and easier web development.'

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer} `}>
                <h2 className={style.title}>My Skills</h2>
                <div className={style.skills}>
                    <Skill title={'JAVASCRIPT'}
                           description={jsDescription}/>
                    <Skill title={'REACT'}
                           description={reactDescription}/>
                    <Skill title={'REDUX'}
                           description={reduxDescription}/>
                    <Skill title={'TYPESCRIPT'}
                           description={typescriptDescription}/>
                    <Skill title={'JEST'}
                           description={jestDescription}/>
                    <Skill title={'MATERIAL UI'}
                           description={materialUiDescription}/>
                </div>
            </div>
        </div>
    )
}