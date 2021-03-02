import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 23},
        {id: 2, message: "It's my first post", likesCount: 4},
        {id: 2, message: "It's my first post", likesCount: 4},
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
    },
    sidebar: {}
  },
  _callSubscriber() {

  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this.callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this.callSubscriber(this._state);
  }

}

export default store;