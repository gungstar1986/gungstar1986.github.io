import React from "react"
import classes from "../Content/Send/Send.module.css";
import {Field, Form, reduxForm} from "redux-form";
import {maxLength, required} from "../validators/Validators";
import {Textarea} from "../CustomForms/CustomForms";


const maxLength300 = maxLength(300);
const Component = (props) => {
    return (
        <Form onSubmit={props.handleSubmit}>
            <Field name={"message"}
                   placeholder="Write Massage"
                   component={Textarea}
                   validate={[required, maxLength300]}/>
            <div className={classes.send}>
                <button>Send</button>
            </div>
        </Form>
    )
};
export const AddMessageToTheForm = reduxForm({form: "addPostForm"})(Component);
