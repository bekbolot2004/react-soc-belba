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
        messagesPage: {
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
            ]
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
        if (action.type === 'ADD-POST'){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 4
            };
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = "";
            this.callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this.callSubscriber(this._state);
        }
    }

}

export default store;