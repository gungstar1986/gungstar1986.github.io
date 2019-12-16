import React from "react";
import classes from "./Posts.module.css"
import MyMessage from "../Messages/Message";



const MyPosts = (props) => {
    // Render message list
    const state = props.profilePage.postData;
    const myMessages = state.map(el => <MyMessage message={el.post} id={el.id}/>);

    // Get placeholder value from State
    const placeholderValue = props.profilePage.tempMessage;

    // Get placeholder value from USER
    const textareaText = React.createRef();

    // Dispatch functions
    const changePlaceholder = () => props.addTempPostText(textareaText.current.value);
    const addItem = () => props.addPost();

    return (
        <div className={classes.myposts}>
            <div className={classes.headline}>My Posts</div>
            <textarea ref={textareaText} value={placeholderValue}
                      onChange={changePlaceholder}
                      placeholder="Write Massage"/>
            <div className={classes.send}>
                <button onClick={addItem}>Send</button>
            </div>
            <div>{myMessages}</div>
        </div>
    )
};
export default MyPosts;
