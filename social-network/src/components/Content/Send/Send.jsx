import React from "react"
import classes from "./Send.module.css"
import {addItemToChatActionCreator, addTempItemToChatActionCreator} from "../../../redux/messagePage-reducer";


const Send = (props) => {

    const textareaText = React.createRef();
    const addTempItem = () => props.changePlaceholder(textareaText.current.value);
    const addItem = () => props.addPost();

    return (
        <div className={classes.sendMessage}>
            <textarea ref={textareaText} value={props.placeholderItem} onChange={addTempItem} placeholder="Write Massage"/>
            <div className={classes.send}>
                <button onClick={addItem}>Send</button>
            </div>
        </div>
    )
};


export default Send

