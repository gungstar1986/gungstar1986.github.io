import {combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePage-reducer";
import messagePageReducer from "./messagePage-reducer";
import sideBarPageReducer from "./sidebar-reducer";
import usersPageReducer from "./usersPage-reducer";
import authReducer from "./auth-Reducer";

const reducers = combineReducers({
    profilePage: profilePageReducer,
    messagePage: messagePageReducer,
    sidebar: sideBarPageReducer,
    usersPage: usersPageReducer,
    userAuthData: authReducer
});

const store = createStore(reducers);
window.store = store;
export default store;
