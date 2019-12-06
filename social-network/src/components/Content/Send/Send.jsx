import React from "react"
import classes from "./Send.module.css"


const Send = (props) => {
    console.log()
    const textareaText = React.createRef()
    const addItem = () => {

    }
    return (
        <div className={classes.sendMessage}>
            <textarea ref={textareaText} placeholder="Write Massage"></textarea>
            <div className={classes.send}>
                <button onClick={addItem}>Send</button>
            </div>
        </div>
    )
}


export default Send

