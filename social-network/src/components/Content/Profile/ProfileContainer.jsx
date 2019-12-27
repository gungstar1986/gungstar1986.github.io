import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUser, updateStatus} from "../../../redux/profilePage-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        const userID = this.props.match.params.userId || 5471; // Find user ID ;-)
        this.props.getUser(userID);
        this.props.getStatus(userID);
    }
    render() {
        return (
            <div>
                <Profile {...this.props} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.userStatus
    }
};
const mapDispatchToProps = {
    getUser,
    getStatus,
    updateStatus
};

const UserProfileContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter)(ProfileContainer);

export default UserProfileContainer;
