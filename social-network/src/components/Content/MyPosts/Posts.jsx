import React from "react";
import classes from "./Posts.module.css"
import MyMessage from "../Messages/Message";



const MyPosts = (props) => {
    const state = props.profilePage.postData;
    const placeholderValue = props.profilePage.tempMessage.post;
    const myMessages = state.map(el => <MyMessage message={el.post} id={el.id}/>);

    // Получение value плейсхолдера ref={}
    const textareaText = React.createRef();
    // Change text into placeholder and State
    const changePlaceholder = () => props.addTempPostText(textareaText.current.value);
    // Add post into State
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
