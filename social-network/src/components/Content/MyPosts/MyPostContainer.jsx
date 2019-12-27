import React from "react";
import MyPosts from "./Posts";
import {connect} from "react-redux";
import {addPostActionCreator, addTempPostActionCreator} from "../../../redux/profilePage-reducer";
import {compose} from "redux";

// Set state values to the props
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

// react-redux connect (need to be install with npm install)
const MyPostContainer = compose(connect(mapStateToProps, mapDispatchToProps)) (MyPosts);

export default MyPostContainer;
