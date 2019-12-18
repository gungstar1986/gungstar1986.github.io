const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_USER_PROFILE = "SET_USER_PROFILE";

// State by default
const initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 50,
    currentPage: 1,
    isFetching: true,
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

    return state
};

// Action creators
export const follow = (userId) => ({type: "FOLLOW", userId});
export const unfollow = (userId) => ({type: "UNFOLLOW", userId});
export const setUsers= (users) => ({type: "SET-USERS", users});
export const setCurrentPage = (currentPage) => ({type: "SET_CURRENT_PAGE", currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: "SET_TOTAL_USERS_COUNT", totalUsersCount});
export const setIsFetching = (boolean) => ({type: "TOGGLE_IS_FETCHING", boolean});


export default usersPageReducer;
