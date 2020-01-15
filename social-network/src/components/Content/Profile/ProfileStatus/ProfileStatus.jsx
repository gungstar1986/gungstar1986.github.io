import React from "react"
import classes from "./ProfileStatus.module.css"

class ProfileStatus extends React.Component {

    state = {
        isEdit: false,
        status: this.props.status || "No status"
    };

    activate = () => {
        this.setState({
            isEdit: true
        })
    };
    deactivate = () => {
        this.setState({
            isEdit: false
        });
        this.props.updateStatus(this.state.status)
    };
    changeStatus = (event) => {
        this.setState({
            status: event.currentTarget.value
        })
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) this.setState({
                    status: this.props.status
                })
    }


    render() {
        return (
            <div className={classes.profileStatusContainer}>{

                !this.state.isEdit
                    ? <div className={classes.status} onClick={this.activate}>{this.props.status || "No status"}</div>
                    : <div className={classes.editMode}>

                        <input onBlur={this.deactivate}
                               autoFocus={true}
                               value={this.state.status}
                               placeholder="Your Status"
                               onChange={this.changeStatus}/>
                    </div>
            }
            </div>
        )
    }
}

export default ProfileStatus
