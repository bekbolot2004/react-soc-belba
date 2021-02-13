import {rerenderEntireTree} from "../render";

let state = {
    profilePage:{
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 23},
            {id: 2, message: "It's my first post", likesCount: 4 },
            {id: 2, message: "It's my first post", likesCount: 4 },
        ]
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

}


export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 4
    };
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state);
}

export default state;