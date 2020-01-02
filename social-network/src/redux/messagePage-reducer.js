const ADD_POST_TO_CHAT = "ADD-POST-TO-CHAT";

// Default State statement
const stateByDefault =  {
    messagesData: [
        {message: "Hello", id: 1},
        {message: "Hey", id: 2},
    ],
        usersData: [
        {name: "Яна", id: 1},
        {name: "Тимур", id: 2}
    ]
};

// Store reducer
const messagePageReducer = (state = stateByDefault, action) => {
    if (action.type === ADD_POST_TO_CHAT) {

        // create and return copy of new values
        return {
            ...state,
            messagesData: [...state.messagesData, {message: action.message}],
        }
    }
    return state
};

// Action creators
export const addItemToChatActionCreator = (message) => ({type: "ADD-POST-TO-CHAT", message});
export default messagePageReducer;
