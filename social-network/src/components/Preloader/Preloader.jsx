import React from 'react'
import classes from './Preloader.module.css'
import animation from "../img/animation.svg";

const Preloader = (props) => {
    return (
        <div><img className={classes.spinner} src={animation} alt=""/></div>
    )
};

export default Preloader;
