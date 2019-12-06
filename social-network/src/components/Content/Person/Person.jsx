import React from "react";
import classes from "./Person.module.css"

const Person = (props) => {
    const name = props.name;
    const birth = props.birth;
    const education = props.education;
    const web = props.web;
    return (
        <div className={classes.person}>
            <div>{`Name: ${name}`} </div>
            <div>{`Birth: ${birth}`}</div>
            <div>{`Education: ${education}`}</div>
            <div>{`Web: ${web}`}</div>
        </div>
    )
}
export default Person;