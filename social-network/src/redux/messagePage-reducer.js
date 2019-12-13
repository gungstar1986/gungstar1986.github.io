const ADD_POST_TO_CHAT = "ADD-POST-TO-CHAT";
const ADD_TEMPPOST_TO_CHAT = "ADD-TEMPPOST-TO-CHAT";
const stateByDefault =  {
    messagesData: [
        {message: "Hello"},
        {message: "Hey"},
    ],
        usersData: [
        {name: "Яна", id: 1},
        {name: "Тимур", id: 2}
    ],
        tempChat: [
        {message: ''}
    ]
}
const messagePageReducer = (state = stateByDefault, action) => {
    if (action.type === ADD_POST_TO_CHAT) {
        state.messagesData.push({
            message: state.tempChat.message
        });
        state.tempChat.message = '';
    } else if (action.type === ADD_TEMPPOST_TO_CHAT) {
        state.tempChat.message = action.text;
    }
    return state
};
export const addItemToChatActionCreator = () => ({type: "ADD-POST-TO-CHAT"});
export const addTempItemToChatActionCreator = (text) => ({type: "ADD-TEMPPOST-TO-CHAT", text: text});
export default messagePageReducer;
