import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../../redux/profilePage-reducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {

    componentDidMount() {

    let changeProfilePage = this.props.match.params.userId || 5471; // Find user ID ;-)

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${changeProfilePage}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
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
    setUserProfile
};

const UserProfileContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer));
export default UserProfileContainer;
