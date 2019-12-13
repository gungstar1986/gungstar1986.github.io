import {combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePage-reducer";
import messagePageReducer from "./messagePage-reducer";
import sideBarPageReducer from "./sidebar-reducer";

const reducers = combineReducers({
    profilePage: profilePageReducer,
    messagePage: messagePageReducer,
    sidebar: sideBarPageReducer
});

const store = createStore(reducers);
console.log(store);

export default store;
