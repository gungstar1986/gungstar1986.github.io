import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUser} from "../../../redux/profilePage-reducer";
import {withRouter} from "react-router-dom";


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
        profile: state.profilePage.profile
    }
};
const mapDispatchToProps = {
    getUser
};

const UserProfileContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer));
export default UserProfileContainer;
