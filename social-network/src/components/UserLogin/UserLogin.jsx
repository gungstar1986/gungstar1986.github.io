import React from "react"
import classes from "./UserLogin.module.css"
import {Field, reduxForm} from "redux-form";


const LoginForm = (props) => {
    return (
        <div className={classes.userLogin}>
            <form onSubmit={props.handleSubmit}>
                <div className={classes.inputArea}>
                    <Field placeholder="Login"
                           name={"login"}
                           component={"input"}/></div>
                <div className={classes.inputArea}>
                    <Field placeholder="Password"
                           name={"password"}
                           component={"input"}/></div>
                <div className={classes.inputArea}>
                    <Field className={classes.checkbox}
                           type={"checkbox"}
                           name={"rememberMe"}
                           component={"input"}/>Remember Me
                </div>
                <div className={classes.inputArea}>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
};
const LoginReduxForm = reduxForm({form: "login"})(LoginForm);


export const UserLogin = (props) => {
    const onSubmit = (loginData) => console.log(loginData);
    return (
        <div className={classes.userLoginContainer}>
            <h2>LOGIN</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};
