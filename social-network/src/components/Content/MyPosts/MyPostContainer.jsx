import React from "react";
import MyPosts from "./Posts";
import {addPostActionCreator, addTempPostActionCreator} from "../../../redux/profilePage-reducer";


const MyPostContainer = (props) => {
    // Get tempMessage from State
    const newPost = props.tempMessage.post;
    const addTempPostText = (text) => props.dispatch(addTempPostActionCreator(text));
    const addPost = () => props.dispatch(addPostActionCreator());
    return <MyPosts newPost={newPost} addTempPostText={addTempPostText} addPost={addPost}/>
};

export default MyPostContainer
