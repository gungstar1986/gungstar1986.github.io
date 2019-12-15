import React from "react";
import MyPosts from "./Posts";
import {connect} from "react-redux";
import {addPostActionCreator, addTempPostActionCreator} from "../../../redux/profilePage-reducer";

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        addTempPostText: (text) => dispatch(addTempPostActionCreator(text)),
        addPost: () => dispatch(addPostActionCreator())
    }
};
const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostContainer;
