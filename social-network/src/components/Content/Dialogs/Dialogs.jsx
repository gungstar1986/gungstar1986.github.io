import React from "react";
import Send from "../Send/Send";
import {addItemToChatActionCreator} from "../../../redux/messagePage-reducer";
import {connect} from "react-redux";
import withAuthRedirect from "../../AuthRedirect/withAuthRedirect";

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
        addPost: (value) => dispatch(addItemToChatActionCreator(value))
    }
};

// react-redux connect (need to be install with npm install)
const Dialogs = connect(mapStateToProps, mapDispatchToProps)(withAuthRedirect(Send));
export default Dialogs;
