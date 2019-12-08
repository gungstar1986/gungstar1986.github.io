import React from "react";
import classes from "./Content.module.css"
import Profile from "./Profile/Profile";
import MyPosts from "./MyPosts/Posts";
import MyMessage from "./Messages/Message";




const Content = (props) => {


    const myMessages = props.posts.postData.map(el => <MyMessage message={el.post} id={el.id}/>)
    return (
        <div className={classes.content}>
            <div className={classes.img}></div>
            {/*// Avatar + description*/}
            <Profile/>

            {/*// Send message form*/}
            <MyPosts  tempItem={props.tempItem} addPost={props.addPost} tempMessage={props.posts.tempMessage}/>

            {/*// List messages*/}
            {myMessages}
        </div>
    )
}
export default Content;

