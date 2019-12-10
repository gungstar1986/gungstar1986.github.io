import React from "react"
import classes from "./Send.module.css"


const Send = (props) => {
    const tempChatText = props.chat.message;
    const textareaText = React.createRef();

    const addTempItem = () => {
        props.addTempChatItem(textareaText.current.value)
    };
    const addItem = () => {
        props.addItemToChat()
    };
    return (
        <div className={classes.sendMessage}>
            <textarea ref={textareaText} value={tempChatText} onChange={addTempItem} placeholder="Write Massage"/>
            <div className={classes.send}>
                <button onClick={addItem}>Send</button>
            </div>
        </div>
    )
}


export default Send

