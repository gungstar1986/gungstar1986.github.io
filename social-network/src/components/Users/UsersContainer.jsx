import React from "react"
import {connect} from "react-redux";
import {
    unfollowUser,
    setIsDisable,
    getUsersList,
    getUsersFromCurrentPage, followUser
} from "../../redux/usersPage-reducer";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import {usersPage} from "../Api/api";
import withAuthRedirect from "../AuthRedirect/withAuthRedirect";
import {compose} from "redux";



class UsersContainerComponent extends React.Component {
    componentDidMount() {
        this.props.getUsersList(this.props.currentPage, this.props.pageSize)
    }

    // Change page number function + update users via JSON request (It sending via props to the <Users/> component)
    onChangePage = (page) => {
        this.props.getUsersFromCurrentPage(page, this.props.pageSize)
    };

    render() {
        return <>

            {/*Спиннер загрузки страницы ---------!!! */}
            {this.props.isFetching ? <Preloader/> : null}

            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onChangePage={this.onChangePage}
                users={this.props.users}
                follow={this.props.followUser}
                unfollow={this.props.unfollowUser}
                usersPage={usersPage}
                isDisable={this.props.isDisable}
                setDisable={this.props.setIsDisable}
            />
        </> // <= Заглушка !!
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isDisable: state.usersPage.isDisable,
    }
};
const mapDispatchToProps = {
    followUser,
    unfollowUser,
    setIsDisable,
    getUsersList,
    getUsersFromCurrentPage
};



const UserContainer = compose(connect(mapStateToProps, mapDispatchToProps)) (UsersContainerComponent);
export default UserContainer;
