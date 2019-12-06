import React from "react";
import classes from "./Header.module.css"
import img from "../img/Silc.png"

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src={img} alt=""/>
        </header>
    )
}
export default Header;