const ADD_POST_TO_WALL = "ADD-POST-TO-WALL";
const ADD_TEMPPOST_TO_WALL = "ADD-TEMPPOST-TO-WALL";

// Default State statement
const stateByDefault = {
    postData: [
        {post: `message in the state tree`},
    ],
    tempMessage: ''
};

// Store reducer
const profilePageReducer = (state = stateByDefault, action) => {
    if (action.type === ADD_POST_TO_WALL) {

        // create and return copy of new values
        return {
            ...state,
            postData: [...state.postData, {post: state.tempMessage}],
            tempMessage: ''
        };
    } else if (action.type === ADD_TEMPPOST_TO_WALL) {
        // create and return copy of new values
        return {
            ...state,
            tempMessage: action.text
        };
    }
    return state
};

// Action creators
export const addPostActionCreator = () => ({type: "ADD-POST-TO-WALL"});
export const addTempPostActionCreator = (text) => ({type: "ADD-TEMPPOST-TO-WALL", text: text});

export default profilePageReducer;