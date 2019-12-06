import React from "react";
import classes from "./Posts.module.css"

const MyPosts = (props) => {
    const textareaText = React.createRef();
    const addItem = () => {
        props.addPost(textareaText.current.value)
        textareaText.current.value = ''
    };
    return (
        <div className={classes.myposts}>
            <div className={classes.headline}>My Posts</div>
            <textarea ref={textareaText} placeholder="Write Massage"></textarea>
            <div className={classes.send}>
                <button onClick={addItem}>Send</button>
            </div>
        </div>
    )
};
export default MyPosts;