import React from "react"
import classes from "./ProfileInfo.module.css";
import Preloader from "../../../Preloader/Preloader";
import ProfileStatus from "../ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {

    if (!props.profile) return <Preloader/>;

    const contacts = () => {
        const stack = [];
        for (const i in props.profile.contacts) {
            stack.push([[i], [props.profile.contacts[i] || '']])
        }
        return (stack)
    };

    return (
        <div className={classes.container}>
            <div className={classes.avatar}>{
                props.profile.photos.large || props.profile.photos.small
                    ? <img src={props.profile.photos.large} alt=""/> || <img src={props.profile.photos.small} alt=""/>
                    : <img src="https://cdn0.iconfinder.com/data/icons/streamline-emoji-1/48/129-man-student-1-128.png"
                           alt=""/>
            }

            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>


            <div className={classes.person}>
                <div className={classes.descriptContainer}>
                    <div className={classes.description}>Полное имя:</div>
                    <div className={classes.propsItem}>{props.profile.fullName || "Пока не придумал"}</div>
                </div>
                <div className={classes.descriptContainer}>
                    <div className={classes.description}>Обо мне:</div>
                    <div className={classes.propsItem}>{props.profile.aboutMe || "Ничего не придумал"}</div>
                </div>
                <div className={classes.descriptContainer}>
                    <div className={classes.description}>Ищу работу?:</div>
                    <div className={classes.propsItem}>{
                        props.profile.lookingForAJob ? "Да" : "Нет"}</div>
                </div>
                <div className={classes.descriptContainer}>

                    <div className={classes.description}>Контакты:</div>
                    <div className={classes.socialContainer}> {contacts().map(elem => <div className={classes.social}>
                        <ul>
                            <div className={classes.socialLinks}>{elem[0]} {elem[1] == ''
                                ? ''
                                : <a href={elem[1][0]}> {elem[1][0]}</a>}</div>
                        </ul>
                    </div>)}
                    </div>

                </div>
            </div>
        </div>
    )
};

export default ProfileInfo;
