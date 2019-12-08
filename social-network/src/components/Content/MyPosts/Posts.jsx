import React from "react";
import classes from "./Posts.module.css"


const MyPosts = (props) => {

    const textareaText = React.createRef();
    const newMessage = props.tempMessage.post;

    const changePlaceholder = () => {
        props.tempItem(textareaText.current.value)
    };
    const addItem = () => {
        props.addPost();
    };

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