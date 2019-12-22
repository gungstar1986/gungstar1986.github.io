import {usersPage} from "../components/Api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_DISABLE = "TOGGLE_IS_DISABLE";


// State by default
const initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 50,
    currentPage: 1,
    isFetching: true,
    isDisable: []
};

// Store reducer
const usersPageReducer = (state = initialState, action) => {
    if (action.type === FOLLOW) {
        return {
            // Make copy of state
            ...state,
            // Make a copy of "users" => .map() users Array => change element if user.id === action.id in the map().element
            users: state.users.map(user => user.id === action.userId
                ? {...user, followed: true}
                : user)
        }
    }
    if (action.type === UNFOLLOW) {
        return {
            // Make copy of state
            ...state,
            // Make a copy of "users" => .map() users Array => change element if user.id === action.id in the map().element
            users: state.users.map(user => user.id === action.userId
                ? {...user, followed: false}
                : user)
        }
    }
    if (action.type === SET_USERS) {
        return {
            ...state,
            users: action.users
        }
    }
    if (action.type === SET_CURRENT_PAGE) {
        return {
            ...state,
            currentPage: action.currentPage
        }
    }
    if (action.type === SET_TOTAL_USERS_COUNT) {
        return {
            ...state,
            totalUsersCount: action.totalUsersCount
        }
    }
    if (action.type === TOGGLE_IS_FETCHING) {
        return {
            ...state,
            isFetching: action.boolean
        }
    }
    if (action.type === TOGGLE_IS_DISABLE) {
        return {
            ...state,
            isDisable: action.boolean // Считываем булево значеие из action
                // Если в экшене передано true, то далем копию state.isDisable и пушим в него ID юзера
                ? [...state.isDisable, action.userID]
                // Если в экшене передано false, то фильтруем и возвращаем новый массив с юзерами, чьи ID не совпадат с переданным в экшене
                : [state.isDisable.filter(id => id !== action.userID)]
        }
    }

    return state
};

// Action creators
export const follow = (userId) => ({type: "FOLLOW", userId});
export const unfollow = (userId) => ({type: "UNFOLLOW", userId});
export const setUsers = (users) => ({type: "SET-USERS", users});
export const setCurrentPage = (currentPage) => ({type: "SET_CURRENT_PAGE", currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: "SET_TOTAL_USERS_COUNT", totalUsersCount});
export const setIsFetching = (boolean) => ({type: "TOGGLE_IS_FETCHING", boolean});
export const setIsDisable = (boolean, userID) => ({type: "TOGGLE_IS_DISABLE", boolean, userID});

// Thunk creators
export const getUsersList = (currentPage, pageSize) => (dispatch) => {
    // Add loader animation
    dispatch(setIsFetching(true));
    // GET request to server
    usersPage.getUsers(currentPage, pageSize).then(response => {
        dispatch(setIsFetching(false));
        dispatch(setUsers(response.items));
        dispatch(setTotalUsersCount(response.totalCount))
    })
};
export const getUsersFromCurrentPage = (page, pageSize) => (dispatch) => {
    dispatch(setIsFetching(true)); // Add loader animation
    dispatch(setCurrentPage(page));
    usersPage.getUsers(page, pageSize).then(response => {
        dispatch(setIsFetching(false));
        dispatch(setUsers(response.items))
    })
};
export const unfollowUser = (userID) => (dispatch) => {
    dispatch(setIsDisable(true, userID));
    usersPage.unfollowUser(userID).then(response => {
        if (response.resultCode === 0) {
            dispatch(unfollow(userID))
        }
        dispatch(setIsDisable(false, userID))
    });
};
export const followUser = (userID) => (dispatch) => {
    dispatch(setIsDisable(true, userID));
    usersPage.followUser(userID).then(response => {
        if (response.resultCode === 0) {
            dispatch(follow(userID))
        }
        dispatch(setIsDisable(false, userID))
    });
};

export default usersPageReducer;
