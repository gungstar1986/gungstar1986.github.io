import React from "react";
import classes from "./Profile.module.css";
import Person from "../Person/Person";



const Profile = (props) => {
    return (
        <div className={classes.avatar}>
            <img src="https://cdn0.iconfinder.com/data/icons/streamline-emoji-1/48/129-man-student-1-128.png"
                 alt=""/>
            <Person name="Ivan" birth="11.07.1986" education="LA'2010" web="google.com.ua"/>
        </div>
    )
}

export default Profile;