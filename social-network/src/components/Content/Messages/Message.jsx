import React from "react"
import classes from "./Message.module.css"



const MyMessage = (props) => {
    const message = props.message;
    return (
        <div className={classes.messageWraper}>
            <div className={classes.logo}>
                <img src="https://cdn0.iconfinder.com/data/icons/streamline-emoji-1/48/122-old-man-2-32.png" alt=""/>
            </div>
            <div className={classes.message}>{message}</div>
        </div>
    )
}

export default MyMessage;