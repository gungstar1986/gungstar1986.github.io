const ADD_POST_TO_CHAT = "ADD-POST-TO-CHAT";
const ADD_TEMPPOST_TO_CHAT = "ADD-TEMPPOST-TO-CHAT";

// Default State statement
const stateByDefault =  {
    messagesData: [
        {message: "Hello", id: 1},
        {message: "Hey", id: 2},
    ],
        usersData: [
        {name: "Яна", id: 1},
        {name: "Тимур", id: 2}
    ],
        tempChat: ''
};

// Store reducer
const messagePageReducer = (state = stateByDefault, action) => {
    if (action.type === ADD_POST_TO_CHAT) {

        // create and return copy of new values
        return {
            ...state,
            messagesData: [...state.messagesData, {message: state.tempChat}],
            tempChat : ''
        }
    } else if (action.type === ADD_TEMPPOST_TO_CHAT) {

        // create and return copy of new values
        return {
            ...state,
            tempChat: action.text
        };
    }
    return state
};

// Action creators
export const addItemToChatActionCreator = () => ({type: "ADD-POST-TO-CHAT"});
export const addTempItemToChatActionCreator = (text) => ({type: "ADD-TEMPPOST-TO-CHAT", text: text});
export default messagePageReducer;
