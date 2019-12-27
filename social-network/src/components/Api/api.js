import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {"API-KEY": "f1d0ad12-64d5-4c57-8e25-ff34abe8c1e9"} //gungstar1986
    // headers: {"API-KEY": "7db022b0-84a2-4af3-8b86-a57c97e5c9bc"} //return
});


export const profilePage = {
    getUserProfile(userID) {
        return instance.get(`profile/${userID}`)
    },
    getUserStatus(userID) {
        return instance.get(`/profile/status/${userID}`)
    },
    updateUserStatus(status) {
        return instance.put(`/profile/status/`, {status})
    },
};
export const usersPage = {
    getUsers (currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    unfollowUser (userID) {
        return instance.delete(`follow/${userID}`).then(response => response.data)
    },
    followUser (userID) {
        return instance.post(`follow/${userID}`).then(response => response.data)
    },
};
export const auth = {
    getAuthInfo () {
        return instance.get(`auth/me`).then(response => response.data)
    }
};

