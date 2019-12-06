import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import Send from "../Send/Send";


const Dialogs = (props) => {
    const DialogItem = (props) => {
        const path = `/messages/${props.id}`
        return (
            <div className={classes.item}>
                <NavLink to={path} activeClassName={classes.active}> {props.name} </NavLink>
            </div>
        )
    }
    const Chat = (props) => {
        const message = props.message
        return (
            <div className={classes.messages}>{message}</div>
        )
    }
    const users = props.users.map(user => <DialogItem name={user.name} id={user.id}/>)
    const messages = props.messages.map(el => <Chat message={el.message}/>)
    return (
        <div className={classes.dialogs}>
            <div className={classes.chatList}>
                {users}
            </div>
            <div className={classes.chat}>
                {messages}
                <Send/>
            </div>
        </div>
    )
}

export default Dialogs;