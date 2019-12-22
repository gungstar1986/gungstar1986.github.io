import React from "react";
import classes from "./Header.module.css"
import img from "../img/Silc.png"
import userLogo from "../img/userLogo.png"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src={img} alt=""/>
            <NavLink to={"/login"}>
                <div className={classes.userLogo}>
                    <img src={userLogo} alt=""/>
                    <div className={classes.userName}>{props.userAuthData.isAuth ? props.userAuthData.login : "Login"}</div>
                </div>
            </NavLink>
        </header>
    )
};

export default Header;
