import React from "react";
import classes from "./Content.module.css"
import Profile from "./Profile/Profile";
import MyPostContainer from "./MyPosts/MyPostContainer";


const Content = () => {
    return (
        <div className={classes.content}>
            <div className={classes.img}/>
            <Profile/>
            <MyPostContainer/>
        </div>
    )
};
export default Content;

