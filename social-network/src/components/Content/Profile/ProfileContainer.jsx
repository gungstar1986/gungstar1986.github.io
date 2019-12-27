import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUser} from "../../../redux/profilePage-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import withAuthRedirect from "../../AuthRedirect/withAuthRedirect";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let changeProfilePage = this.props.match.params.userId || 5471; // Find user ID ;-)
        this.props.getUser(changeProfilePage)
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
    }
};
const mapDispatchToProps = {
    getUser
};

const UserProfileContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect)(ProfileContainer);

export default UserProfileContainer;
