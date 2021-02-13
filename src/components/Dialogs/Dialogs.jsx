import React, {useEffect} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import style from './Dialogs.module.css'

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
    let dialogsElements = props.state.dialogs.map( d => <DialogsItem name ={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map( m => <Message message={m.message}/>);


    let newMessage = React.createRef();

    let sendMessage = () => {
        let txt = newMessage.current.value;
        alert(txt)
    }

    return(
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
            <div>
                <form className={style.btn_block}>
                    <textarea ref={newMessage}></textarea>
                    <button onClick={sendMessage}>Отправить</button>
                </form>
            </div>
        </div>
    );
}

export default Dialogs;