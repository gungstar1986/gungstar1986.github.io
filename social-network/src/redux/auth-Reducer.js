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
export default authReducer
