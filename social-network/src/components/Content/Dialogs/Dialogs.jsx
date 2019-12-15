import React from "react";
import Send from "../Send/Send";
import {addItemToChatActionCreator, addTempItemToChatActionCreator} from "../../../redux/messagePage-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        users: state.messagePage.usersData,
        messages: state.messagePage.messagesData,
        placeholderItem: state.messagePage.tempChat.message
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        changePlaceholder: (text) => dispatch(addTempItemToChatActionCreator(text)),
        addPost: () => dispatch(addItemToChatActionCreator())
    }
};
const Dialogs = connect(mapStateToProps, mapDispatchToProps)(Send);
export default Dialogs;
