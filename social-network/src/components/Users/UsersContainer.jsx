import React from "react"
import {connect} from "react-redux";
import {
    follow, setIsFetching, setCurrentPage, setTotalUsersCount, setUsers, unfollow
} from "../../redux/usersPage-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";

class UsersContainerComponent extends React.Component {

    componentDidMount() {
        // Add loader animation
        this.props.setIsFetching(true);

        // GET request to server
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    // Change page number function + update users via JSON request (It sending in props to the <Users/> component)
    onChangePage = (page) => {
        this.props.setIsFetching(true); // Add loader animation
        this.props.setCurrentPage(page);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false);
                this.props.setUsers(response.data.items)
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
        isFetching: state.usersPage.isFetching
    }
};
const mapDispatchToProps = {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching,
};

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerComponent);
export default UserContainer;
