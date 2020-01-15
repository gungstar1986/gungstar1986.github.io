import {auth, loginAPI} from "../components/Api/api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_USER_LOGOUT = "SET_USER_LOGOUT"

const intitialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
};

const authReducer = (state = intitialState, action) => {
    if (action.type === SET_USER_DATA) {
        return {
            ...state,
            ...action.data,
            isAuth: true
        }
    }
    if (action.type === SET_USER_LOGOUT) {

        return {
            ...state,
            isAuth: false
        }
    }
    return state
};
export const setAuthUserData = (data) => ({type: "SET_USER_DATA", data});

export const getAuthUserData = () => (dispatch) => {
    auth.getAuthInfo().then(response => {
        if (response.resultCode === 0) {
            dispatch(setAuthUserData(response.data));
        }
    })
};
const setUserLogout = (data) => ({ type: "SET_USER_LOGOUT", data});
export const loginMe = (email, password, rememberMe) => (dispatch) => {
    loginAPI.loginMe(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        }
    })
};
export const logoutMe = () => (dispatch) => {
    loginAPI.logoutMe().then(response => {
        response.data.resultCode === 0 && dispatch(setUserLogout(
            {
                id: null,
                login: null,
                email: null,
                isAuth: false
            }))
    })
};

export default authReducer
