import React from "react";
import classes from "./CustomForms.module.css"


export const Textarea = ({input, meta}) => {
    if (typeof meta.error === "string" && meta.touched && (meta.error).includes("max message length")) return (
        <div>
            <textarea className={classes.lengthError} {...input}/>
            <span className={classes.errorMessage}>{meta.error}</span>
        </div>);
    if (meta.error === "Error: message must be not empty" && meta.touched)
        return <textarea placeholder={"Message can't be empty"} {...input}/>;
    return <textarea {...input} />
};
export const InputLogin = ({input, meta}) => {
    if (meta.error === "Error: message must be not empty" && meta.touched)
        return <input className={classes.errorForm} placeholder={"Login can't be empty"} {...input}/>;
    return <input placeholder={"Login"} {...input}/>
};
export const InputPass = ({input, meta}) => {
    if (meta.error === "Error: message must be not empty" && meta.touched)
        return <input className={classes.errorForm} placeholder={"Password can't be empty"} {...input}/>;
    return <input type={"password"} placeholder={"Password"} {...input}/>
};
