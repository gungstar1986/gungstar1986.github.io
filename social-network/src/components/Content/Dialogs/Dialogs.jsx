import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import Send from "../Send/Send";
import {addItemToChatActionCreator, addTempItemToChatActionCreator} from "../../../redux/messagePage-reducer";


const Dialogs = (props) => {
    // Render users list
    const DialogItem = (props) => {
        const path = `/messages/${props.id}`
        return (
            <div className={classes.item}>
                <NavLink to={path} activeClassName={classes.active}> {props.name} </NavLink>
            </div>
        )
    };
    const users = props.users.map(user => <DialogItem name={user.name} id={user.id}/>);
    // Render messages list
    const Chat = (props) => {
        const message = props.message
        return (
            <div className={classes.messages}>{message}</div>
        )
    };
    const messages = props.messages.map(el => <Chat message={el.message}/>);

    // Refactor props
    const changePlaceholder = (text) => props.dispatch(addTempItemToChatActionCreator(text));
    const addPost = () => props.dispatch(addItemToChatActionCreator());
    const placeholderItem = props.chat.message;

    return (
        <div className={classes.dialogs}>
            <div className={classes.chatList}>
                {users}
            </div>
            <div className={classes.chat}>
                {messages}
                <Send placeholderItem={placeholderItem}
                      changePlaceholder={changePlaceholder}
                      addPost={addPost}/>
            </div>
        </div>
    )
};

export default Dialogs;
