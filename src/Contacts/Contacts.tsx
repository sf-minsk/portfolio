import React from 'react';
import style from './Contacts.module.css';
import styleContainer from "../common/styles/Container.module.css";

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer} `}>
                <span className={style.contactsTitle}>Contacts</span>
                <div className={style.contactsForm}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea></textarea>
                </div>
                <button className={style.contactsButton}>SEND</button>
            </div>
        </div>
    )
}