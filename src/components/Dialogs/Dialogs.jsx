import React, {useEffect} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import style from './Dialogs.module.css'
import {sendMessageCreater, updateNewMessageBodyCreater} from "../../redux/dialogs-reducer";

const DialogsItem = (props) => {

    let path = "/dialogs/" + props.id;
    
    return(
        <div className={style.dialog + " " + style.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return(
        <div className={style.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogsItem name ={d.name} id={d.id}/>);
    let messagesElements = state.messages.map( m => <Message message={m.message}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBodyCreater(body)
    }

    return(
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder="Enter your message"/></div>
                    <div><button onClick={ onSendMessageClick }>Send</button></div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;