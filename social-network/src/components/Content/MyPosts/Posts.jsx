import React from "react";
import classes from "./Posts.module.css"


const MyPosts = (props) => {
    // Получение value плейсхолдера ref={}
    const textareaText = React.createRef();
    // Change text into placeholder and State
    const changePlaceholder = () => props.addTempPostText(textareaText.current.value);
    // Add post into State
    const addItem = () => props.addPost();
    return (
        <div className={classes.myposts}>
            <div className={classes.headline}>My Posts</div>
            <textarea ref={textareaText} value={props.newPost}
                      onChange={changePlaceholder}
                      placeholder="Write Massage"/>
            <div className={classes.send}>
                <button onClick={addItem}>Send</button>
            </div>
        </div>
    )
};
export default MyPosts;
