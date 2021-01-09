import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

const DialogsItem = (props) => {

    let path = "/dialogs/" + props.id;

    return(
        <div className={s.dialog + " " + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return(
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Alya & Love'},
        {id: 2, name: 'Belba'},
        {id: 3, name: 'Alya & Love'},
        {id: 4, name: 'Alya & Love'},
        {id: 5, name: 'Alinur'},
        {id: 6, name: 'Dimych'},
    ]

    let messages = [
        {id: 1, message: 'Salam'},
        {id: 2, message: 'Belba'},
        {id: 3, message: 'Waazzzap bro!'},
        {id: 4, message: 'Привет!'},
    ]

    let dialogsElements = dialogs.map( d => <DialogsItem name ={d.name} id={d.id}/>);
    
    let messagesElements = messages.map( m => <Message message={m.message}/>);

    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;