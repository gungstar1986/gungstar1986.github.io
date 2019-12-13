import profilePageReducer from "./profilePage-reducer";
import messagePageReducer from "./messagePage-reducer";
import sideBarPageReducer from "./sidebar-reducer";

const store = {
    _data: {
        profilePage: {
            postData: [
                {post: `New post`},
            ],
            tempMessage: [
                {post: ''}
            ]
        },
        messagePage: {
            messagesData: [
                {message: "Hello"},
                {message: "Hey"},
            ],
            usersData: [
                {name: "Яна", id: 1},
                {name: "Тимур", id: 2}
            ],
            tempChat: [
                {message: ''}
            ]
        },
        sidebar: {},
    },
    _reRenderDomTree() {
        console.log("DOM reRendered")
    },
    getData() {
        return this._data
    },
    subscribe(observer) {
        this._reRenderDomTree = observer
    },
    dispatch(action) { // action => {type: "ADD-ITEM", message: "TEXT"}
        this._data.profilePage = profilePageReducer(this._data.profilePage, action);
        this._data.messagePage = messagePageReducer(this._data.messagePage, action);
        this._data.sidebar = sideBarPageReducer(this._data.sidebar, action);

        this._reRenderDomTree(this._data)
    }
};
