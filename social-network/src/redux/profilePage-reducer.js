import {profilePage} from "../components/Api/api";

const ADD_POST_TO_WALL = "ADD-POST-TO-WALL";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const GET_USER_STATUS = "GET_USER_STATUS";
const UPDATE_USER_STATUS = "UPDATE_USER_STATUS";

// Default State statement
const stateByDefault = {
    postData: [
        {post: `message in the state tree`},
    ],
    profile: null,
    userStatus: ''
};

// Store reducer
const profilePageReducer = (state = stateByDefault, action) => {
    if (action.type === ADD_POST_TO_WALL) {

        // create and return copy of new values
        return {
            ...state,
            postData: [...state.postData, {post: action.message}],
        };
    }
    if (action.type === SET_USER_PROFILE) {

        return {
            ...state,
            profile: action.profile
        }
    }
    if (action.type === UPDATE_USER_STATUS) {
        return {
            ...state,
            userStatus: action.status
        }
    }
    if (action.type === GET_USER_STATUS) {
        return {
            ...state,
            userStatus: action.status
        };

    }
    return state
};

// Action creators
    export const addPostActionCreator = (message) => ({type: "ADD-POST-TO-WALL", message});
    export const setUserProfile = (profile) => ({type: "SET_USER_PROFILE", profile});
    export const updateUserStatus = (status) => ({type: "UPDATE_USER_STATUS", status});

// Thunk creators
    export const getUser = (page) => (dispatch) => {
        profilePage.getUserProfile(page)
            .then(response => dispatch(setUserProfile(response.data)))
    };
    export const getStatus = (userID) => (dispatch) => {
        profilePage.getUserStatus(userID).then(response => dispatch(updateUserStatus(response.data)))
    };
    export const updateStatus = (status) => (dispatch) => {
        profilePage.updateUserStatus(status).then(response => {
            if (response.data.resultCode === 0) dispatch(updateUserStatus(status))
        })
    };

    export default profilePageReducer;
