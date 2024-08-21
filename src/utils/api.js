import { checkResponse } from "./checkresponse";

const baseUrl = "https://4868-67-165-141-227.ngrok-free.app";
const newBaseUrl = "https://ea9b-67-165-141-227.ngrok-free.app"
export const lastesNewsApi = () => {
    return fetch(`${newBaseUrl}/lastestNews`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            // authorization: `Bearer ${localStorage.getItem("jwt")}`,
        }
    }).then((res) => {
        return checkResponse(res);
    });
};


export const upcomingEventsApi = () => {
    return fetch(`${baseUrl}/readAllDocuments/UpcomingEvents`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
        body: JSON.stringify({})
    }).then((res) => {
        return checkResponse(res);
    });
}

export const popularEventsApi = () => {
    return fetch(`${baseUrl}/readAllDocuments/PopularEvents`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
        body: JSON.stringify({})
    }).then((res) => {
        return checkResponse(res);
    });
}