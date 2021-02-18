const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (state, action) => {
    switch (action.type){
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 4
            };
            state.posts.push(newPost)
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }

    return state;
}

export const addPostActionCreater = () => ({type: ADD_POST});
export const updateNewPostTextActionCreater = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;