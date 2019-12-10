import React from "react";
import classes from "./Posts.module.css"


const MyPosts = (props) => {
    // Получение value плейсхолдера ref={}
    const textareaText = React.createRef();

    // Изменение текста в плейсхолдере
    const changePlaceholder = () => {
        props.dispatch({
            type: "ADD-TEMPPOST-TO-WALL",
            text: textareaText.current.value
        })
    };

    // Получение value из Store/State
    const newMessage = props.tempMessage.post;
    const addItem = () => {
        props.dispatch({
            type: "ADD-POST-TO-WALL",
        });
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