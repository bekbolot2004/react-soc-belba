const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW-MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";


let store = {
    _state : {
        profilePage:{
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 23},
                {id: 2, message: "It's my first post", likesCount: 4 },
                {id: 2, message: "It's my first post", likesCount: 4 },
            ],
            newPostText: 'Hello my niga'
        },
        dialogsPage: {
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

    },
    _callSubscriber(){
        console.log("render")
    },

    getState() {
        return this._state;
    },
    subscribe (observer) {
        this.callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 4
            };
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = "";
            this.callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this.callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY){
            this._state.dialogsPage.newMessageBody = action.body;
            this.callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE){
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = "";
            this._state.dialogsPage.messages.push({id: 6, message: body});
            this.callSubscriber(this._state);
        }
    }

}

export const addPostActionCreater = () => ({type: ADD_POST});
export const updateNewPostTextActionCreater = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const sendMessageCreater = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreater = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});



export default store;