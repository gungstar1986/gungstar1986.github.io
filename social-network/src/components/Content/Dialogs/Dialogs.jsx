import React from "react";
import Send from "../Send/Send";
import {addItemToChatActionCreator, addTempItemToChatActionCreator} from "../../../redux/messagePage-reducer";
import {connect} from "react-redux";

// Set state values to the props
const mapStateToProps = (state) => {
    return {
        users: state.messagePage.usersData,
        messages: state.messagePage.messagesData,
        placeholderItem: state.messagePage.tempChat
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        changePlaceholder: (text) => dispatch(addTempItemToChatActionCreator(text)),
        addPost: () => dispatch(addItemToChatActionCreator())
    }
};

// react-redux connect (need to be install with npm install)
const Dialogs = connect(mapStateToProps, mapDispatchToProps)(Send);
export default Dialogs;
