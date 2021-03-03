import React, {useEffect} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import style from './Dialogs.module.css'
import {sendMessageCreater, updateNewMessageBodyCreater} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

export const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreater());
  }

  let onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreater(body));
  }

  return <Dialogs updateNewMessageBodyCreater={onNewMessageChange} dialogsPage={state}
                  sendMessage={onSendMessageClick}

  />;
}

