import {auth} from "../components/Api/api";

const SET_USER_DATA = "SET_USER_DATA";

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
    return state
};

export const setAuthUserData = (data) => ({type: "SET_USER_DATA", data});

export const getAuthUserData = () => (dispatch) => {
    auth.getAuthInfo().then(response => {
        if (response.resultCode === 0) {
            dispatch(setAuthUserData(response.data));
        }
    })
}
export default authReducer
