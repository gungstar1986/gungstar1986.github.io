const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"

// Default State statement
// const stateByDefault = {
//     users:
//         [{
//             id: 1,
//             fullName: "Anna",
//             followed: true,
//             location: {city: "Kharkov", country: "Ukraine"},
//             status: "Happy",
//             avatar: "https://cdn2.iconfinder.com/data/icons/people-80/96/Picture1-128.png",
//             sex: 'man'
//         }, {
//             id: 2,
//             fullName: "Igor",
//             followed: true,
//             location: {city: "Moskow", country: "Russia"},
//             status: "Happy",
//             avatar: "https://cdn2.iconfinder.com/data/icons/people-80/96/Picture1-128.png",
//             sex: 'woman'
//         }, {
//             id: 3,
//             fullName: "Olga",
//             followed: false,
//             location: {city: "Lviv", country: "Ukraine"},
//             status: "Happy",
//             avatar: "https://cdn2.iconfinder.com/data/icons/people-80/96/Picture1-128.png",
//             sex: 'woman'
//         }, {
//             id: 4,
//             fullName: "Maks",
//             followed: false,
//             location: {city: "Odessa", country: "Ukraine"},
//             status: "Real programmer",
//             avatar: "https://cdn2.iconfinder.com/data/icons/people-80/96/Picture1-128.png",
//             sex: 'man'
//         }]
// };
const initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 50,
    currentPage: 1
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
    return state
};

// Action creators
export const followAC = (userId) => ({type: "FOLLOW", userId});
export const unfollowAC = (userId) => ({type: "UNFOLLOW", userId});
export const setUsersAC = (users) => ({type: "SET-USERS", users});
export const setCurrentPageAC = (currentPage) => ({type: "SET_CURRENT_PAGE", currentPage});
export const setTotalUsersCountAC = (totalUsersCount) => ({type: "SET_TOTAL_USERS_COUNT", totalUsersCount});

export default usersPageReducer;
