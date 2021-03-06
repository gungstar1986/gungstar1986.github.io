import React from 'react'
import classes from "./Users.module.css"
import {NavLink} from "react-router-dom";
import Paginator from "../Pagination/Paginator";

const Users = (props) => {

    return (
        <div>

            {/*Render count of pages*/}
            <Paginator {...props} />

            {/*Render() usersList*/}
            {props.users.map((user) => <div key={user.id} className={classes.usersContainer}>
                <div className={classes.userContainerMain}>
                    <div className={classes.userAvatar}>

                        <NavLink to={`/profile/${user.id}`}>
                            <div className={classes.userFullName}>{user.name}</div>
                            <div className={classes.avatar}><img src={user.photos.small
                                ? user.photos.small
                                : "https://cdn2.iconfinder.com/data/icons/people-80/96/Picture1-128.png"} alt=""/>
                            </div>
                        </NavLink>

                        {/* Render 2 buttons with two dispatch functions */}
                        <div>

                            {user.followed
                                ? <button disabled={props.isDisable.some(u => u === user.id)}
                                          className={classes.follow}
                                          onClick={() => {props.unfollow(user.id)}}> Unfollow </button>

                                : <button disabled={props.isDisable.some(u => u === user.id)}
                                          className={classes.follow}
                                          onClick={() => {props.follow(user.id) }}> Follow </button>}
                        </div>
                    </div>
                    <div className={classes.userInfo}>
                        <div className={classes.userInfoArea}>
                            <div
                                className={classes.userStatus}>{user.status ? user.status : "There is no status"}</div>
                            <hr/>
                            <div className={classes.userLocation}>
                                City: none
                                Country: none
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}

            {/*Render loadButton*/}
            <div className={classes.loadButtonUsers}>
                <button>LOAD USERS</button>
            </div>

        </div>
    )
};

export default Users


