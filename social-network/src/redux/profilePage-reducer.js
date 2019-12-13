const ADD_POST_TO_WALL = "ADD-POST-TO-WALL";
const ADD_TEMPPOST_TO_WALL = "ADD-TEMPPOST-TO-WALL";
const stateByDefault = {
    postData: [
        {post: `message in the state tree`},
    ],
    tempMessage: [
        {post: ''}
    ]
};
const profilePageReducer = (state = stateByDefault, action) => {
    if (action.type === ADD_POST_TO_WALL) {
        state.postData.push({
            post: state.tempMessage.post
        });
        state.tempMessage.post = '';
    } else if (action.type === ADD_TEMPPOST_TO_WALL) {
        state.tempMessage.post = action.text;
    }
    return state
};
export const addPostActionCreator = () => ({type: "ADD-POST-TO-WALL"});
export const addTempPostActionCreator = (text) => ({type: "ADD-TEMPPOST-TO-WALL", text: text});
export default profilePageReducer;
