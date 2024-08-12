import { checkResponse } from "./checkresponse";

const baseUrl = "https://6975-67-165-141-227.ngrok-free.app";

export const lastesNewsApi = () => {
    return fetch(`${baseUrl}/lastestNews`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            // authorization: `Bearer ${localStorage.getItem("jwt")}`,
        }
    }).then((res) => {
        return checkResponse(res);
    });
};


export const upcomingEventsApi = ({state}) => {
    return fetch(`${baseUrl}/readAllDocuments/UpcomingEvents`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
        body: JSON.stringify({state}),
    }).then((res) => {
        return checkResponse(res);
    });
}

export const popularEventsApi = () => {
    return fetch(`${baseUrl}/readAllDocuments/PopularEvents`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            // authorization: `Bearer ${localStorage.getItem("jwt")}`,
        }
    }).then((res) => {
        return checkResponse(res);
    });
}