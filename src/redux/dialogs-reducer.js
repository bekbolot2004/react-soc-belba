const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW-MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
    dialogs: [
        {id: 1, name: 'Staff'},
        {id: 2, name: 'Belba'},
        {id: 3, name: 'Jandos'},
        {id: 4, name: 'JanBolot'},
        {id: 5, name: 'Alinur'},
        {id: 6, name: 'Dimych'}
    ],
    messages: [
        {id: 1, message: 'Salam'},
        {id: 2, message: 'Belba'},
        {id: 3, message: 'Waazzzap bro!'},
        {id: 4, message: 'Привет!'},
    ],
    newMessageBody: ""
}

const DialogsReducer = (state = initialState, action) => {
    switch (action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
}

export const sendMessageCreater = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreater = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default DialogsReducer;