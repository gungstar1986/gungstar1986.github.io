import React from "react";
import classes from "./Content.module.css"
import Profile from "./Profile/Profile";
import MyMessage from "./Messages/Message";
import MyPostContainer from "./MyPosts/MyPostContainer";


const Content = (props) => {
    const myMessages = props.posts.postData.map(el => <MyMessage message={el.post} id={el.id}/>);
    return (
        <div className={classes.content}>
            <div className={classes.img}/>;
            // Avatar + description
            <Profile/>;
            // Send message form
            <MyPostContainer dispatch={props.dispatch} tempMessage={props.posts.tempMessage}/>;
            // List messages
            {myMessages}
        </div>
    )
};
export default Content;

