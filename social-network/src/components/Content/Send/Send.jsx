import React from "react"
import classes from "./Send.module.css"
import {NavLink} from "react-router-dom";


const Send = (props) => {
    // Render users list
    const DialogItem = (props) => {
        const path = `/messages/${props.id}`;
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
    // Get placeholder value
    const textareaText = React.createRef();
    const addTempItem = () => props.changePlaceholder(textareaText.current.value);
    const addItem = () => props.addPost();

    return (
        <div className={classes.dialogs}>
            <div className={classes.chatList}>
                {users}
            </div>
            <div className={classes.chat}>
                {messages}
                <div className={classes.sendMessage}>
                <textarea ref={textareaText} value={props.placeholderItem} onChange={addTempItem}
                          placeholder="Write Massage"/>
                    <div className={classes.send}>
                        <button onClick={addItem}>Send</button>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Send

