import React from "react"
import classes from "./UserLogin.module.css"
import {Field, reduxForm} from "redux-form";
import {required} from "../validators/Validators";
import {InputLogin, InputPass} from "../CustomForms/CustomForms";
import {loginMe} from "../../redux/auth-Reducer";
import {connect} from "react-redux";
import withLoginRedirect from "../AuthRedirect/withLoginRedirect";


const LoginForm = (props) => {
    return (
        <div className={classes.userLogin}>
            <form onSubmit={props.handleSubmit}>
                <div className={classes.inputArea}>
                    <Field placeholder="Login"
                           name={"email"}
                           validate={[required]}
                           component={InputLogin}/></div>
                <div className={classes.inputArea}>
                    <Field placeholder="Password"
                           name={"password"}
                           validate={[required]}
                           component={InputPass}/></div>
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


const UserLogin = (props) => {
    const onSubmit = ({email, password, rememberMe = false}) => {
        props.loginMe(email, password, rememberMe)
    } ;
    return (
        <div className={classes.userLoginContainer}>
            <h2>LOGIN</h2>
            <h3>
                <div>login: 1986testacc@gmail.com</div>
                <div>pass: free</div>
            </h3>

            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};

export default connect(null, {loginMe})(withLoginRedirect(UserLogin))
