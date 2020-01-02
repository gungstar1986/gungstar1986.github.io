import React from "react";
import MyPosts from "./Posts";
import {connect} from "react-redux";
import {addPostActionCreator} from "../../../redux/profilePage-reducer";
import {compose} from "redux";

// Set state values to the props
const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (message) => dispatch(addPostActionCreator(message))
    }
};

// react-redux connect (need to be install with npm install)
const MyPostContainer = compose(connect(mapStateToProps, mapDispatchToProps)) (MyPosts);

export default MyPostContainer;
