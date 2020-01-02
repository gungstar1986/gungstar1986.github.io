import React from "react";
import classes from "./Posts.module.css"
import MyMessage from "../Messages/Message";
import {AddMessageToTheForm} from "../../AddMessge/AddMessgeComponent";



const MyPosts = (props) => {
    // Render message list
    const state = props.profilePage.postData;
    const myMessages = state.map(el => <MyMessage message={el.post} id={el.id}/>);

    // Dispatch functions
    const addItem = (value) => {
        console.log(value.message);
        props.addPost(value.message);
    };

    return (
        <div className={classes.myposts}>
            <div className={classes.headline}>My Posts</div>

            <AddMessageToTheForm onSubmit={addItem}/>

            <div>{myMessages}</div>
        </div>
    )
};


export default MyPosts;
