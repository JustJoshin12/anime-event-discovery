import { checkResponse } from "./checkresponse";

const baseUrl = "https://a5a7-67-165-141-227.ngrok-free.app";

export const lastesNewsApi = () => {
    return fetch(`${baseUrl}/lastestNews`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("jwt")}`,
        }
    }).then((res) => {
        return checkResponse(res);
    });
};


export const upcomingEventsApi = () => {
    return fetch(`${baseUrl}/upcomingEvents`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("jwt")}`,
        }
    }).then((res) => {
        return checkResponse(res);
    });
}

export const popularEventsApi = () => {
    return fetch(`${baseUrl}/popularEvents`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("jwt")}`,
        }
    }).then((res) => {
        return checkResponse(res);
    });
}