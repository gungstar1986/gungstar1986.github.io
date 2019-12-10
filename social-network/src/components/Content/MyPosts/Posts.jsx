import React from "react";
import classes from "./Posts.module.css"
import {addTempPostActionCreator, addPostActionCreator} from "../../../redux/state";


const MyPosts = (props) => {
    // Получение value плейсхолдера ref={}
    const textareaText = React.createRef();
    // Get tempMessage from State
    const newMessage = props.tempMessage.post;


    // Change text into placeholder and State
    const changePlaceholder = () => props.dispatch(addTempPostActionCreator(textareaText.current.value));
    // send Post to the State
    const addItem = () => props.dispatch(addPostActionCreator());

    return (
        <div className={classes.myposts}>
            <div className={classes.headline}>My Posts</div>
            <textarea ref={textareaText} value={newMessage}
                      onChange={changePlaceholder}
                      placeholder="Write Massage"/>
            <div className={classes.send}>
                <button onClick={addItem}>Send</button>
            </div>
        </div>
    )
};
export default MyPosts;