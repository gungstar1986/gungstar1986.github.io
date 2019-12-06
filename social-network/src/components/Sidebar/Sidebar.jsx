import React from "react";
import classes from "./Sidebar.module.css"
import {NavLink} from "react-router-dom";

const Sidebar = (props) => {
    return (
        <nav className={classes.sidebar}>
            <div>
                <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/messages" activeClassName={classes.active}>Messages</NavLink>
            </div>
            <div>
                <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
            </div>
            <div>
                <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
            </div>
            <div>
                <NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Sidebar;