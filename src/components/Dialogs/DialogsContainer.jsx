import React, {useEffect} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import style from './Dialogs.module.css'
import {sendMessageCreater, updateNewMessageBodyCreater} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {StoreContext} from "../../StoreContent";

export const DialogsContainer = () => {
  return <StoreContext.Consumer>
    {
      (store) => {
        let state = store.getState().dialogsPage;

        let onSendMessageClick = () => {
          store.dispatch(sendMessageCreater());
        }

        let onNewMessageChange = (body) => {
          store.dispatch(updateNewMessageBodyCreater(body));
        }

        return <Dialogs updateNewMessageBodyCreater={onNewMessageChange} dialogsPage={state}
                        sendMessage={onSendMessageClick}

        />
      }
    }
  </StoreContext.Consumer>
    ;
}

