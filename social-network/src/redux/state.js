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
        }
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
        if (action.type == "ADD-POST-TO-WALL") {
            this._data.profilePage.postData.push({
                post: this._data.profilePage.tempMessage.post
            });
            this._data.profilePage.tempMessage.post = '';
            this._reRenderDomTree(this._data)
        } else if (action.type == "ADD-TEMPPOST-TO-WALL") {
            this._data.profilePage.tempMessage.post = action.text;
            this._reRenderDomTree(this._data)
        } else if (action.type == "ADD-POST-TO-CHAT") {
            this._data.messagePage.messagesData.push({
                message: this._data.messagePage.tempChat.message
            });
            this._data.messagePage.tempChat.message = '';
            this._reRenderDomTree(this.data)
        } else if (action.type == "ADD-TEMPPOST-TO-CHAT") {
            this._data.messagePage.tempChat.message = action.text;
            this._reRenderDomTree(this._data)
        }
    }
};

export default store