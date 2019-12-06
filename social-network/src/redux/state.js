import {reRenderDomTree} from "../Render";

let countOfUsers = 0;
let countOfMessages = 0;
let countOfPosts = 0;

// Сообщения со страницы пользователя
const postData = [
    {id: countOfPosts++, post: `New post ${countOfPosts}`},
    {id: countOfPosts++, post: `New post ${countOfPosts}`},
]

// Спиосок имен в чате
const usersData = [
    {id: countOfUsers++, name: "Яна"},
    {id: countOfUsers++, name: "Тимур"},

]

// Сообщения в чате
const messagesData = [
    {id: countOfMessages++, message: "Hello"},
    {id: countOfMessages++, message: "Hey"},

]

// Объект Data
const data = {
    profilePage: {
        postData
    },
    messagePage: {
        messagesData,usersData
    }
}



export default data

export const addItemToProfile = (item) => {
    postData.push({id: ++countOfPosts, post: item})
    reRenderDomTree(data)
}
export const addItemToChat = (item) => {
    messagesData.push ({id: ++countOfMessages, message: item})
}

