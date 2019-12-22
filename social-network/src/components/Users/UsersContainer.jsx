import React from "react"
import {connect} from "react-redux";
import {
    follow, setIsFetching, setCurrentPage, setTotalUsersCount, setUsers, unfollow, setIsDisable
} from "../../redux/usersPage-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import {usersPage} from "../Api/api";

class UsersContainerComponent extends React.Component {
    componentDidMount() {
        // Add loader animation
        this.props.setIsFetching(true);
        // GET request to server
        usersPage.getUsers (this.props.currentPage, this.props.pageSize).then(response => {
            this.props.setIsFetching(false);
            this.props.setUsers(response.items);
            this.props.setTotalUsersCount(response.totalCount)
        })
    }

    // Change page number function + update users via JSON request (It sending via props to the <Users/> component)
    onChangePage = (page) => {
        this.props.setIsFetching(true); // Add loader animation
        this.props.setCurrentPage(page);
        usersPage.getUsers(page, this.props.pageSize).then(response => {
            this.props.setIsFetching(false);
            this.props.setUsers(response.items)
        })
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
                follow={this.props.follow}
                unfollow={this.props.unfollow}
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
        isDisable: state.usersPage.isDisable
    }
};
const mapDispatchToProps = {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching,
    setIsDisable
};

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerComponent);
export default UserContainer;
