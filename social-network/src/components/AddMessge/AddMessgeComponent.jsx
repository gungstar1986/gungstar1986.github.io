import React from "react"
import classes from "../Content/Send/Send.module.css";
import {Field, Form, reduxForm} from "redux-form";

const Component = (props) => {
    return (
        <Form onSubmit={props.handleSubmit}>
            <Field name={"message"} placeholder="Write Massage" component={"textarea"}/>
            <div className={classes.send}>
                <button>Send</button>
            </div>
        </Form>
    )
};
export const AddMessageToTheForm = reduxForm({form: "addPostForm"})(Component);
