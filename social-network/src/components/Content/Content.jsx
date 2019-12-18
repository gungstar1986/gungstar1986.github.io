import React from "react";
import classes from "./Content.module.css"
import ProfileContainer from "./Profile/ProfileContainer";


const Content = () => {
    return (
        <div className={classes.content}>
            <div className={classes.img}/>
            <ProfileContainer/>
        </div>
    )
};

export default Content;

