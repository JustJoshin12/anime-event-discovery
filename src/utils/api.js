import { checkResponse } from "./checkresponse";

const eventsUrl = "https://d23e-67-165-141-227.ngrok-free.app";
const newsUrl = "https://15cc-67-165-141-227.ngrok-free.app";

export const latestNewsApi = async () => {
  try {
    const response = await fetch(`${newsUrl}/latestNews`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    });
    return await checkResponse(response);
  } catch (error) {
    console.error("Error fetching latest news:", error);
    throw error; // Propagate error so it can be handled by the caller
  }
};

export const upcomingEventsApi = async () => {
  try {
    const response = await fetch(
      `${eventsUrl}/readAllDocuments/UpcomingEvents`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
        body: JSON.stringify({}),
      }
    );
    return await checkResponse(response);
  } catch (error) {
    console.error("Error fetching upcoming events:", error);
    throw error;
  }
};

export const popularEventsApi = async () => {
  try {
    const response = await fetch(
      `${eventsUrl}/readAllDocuments/PopularEvents`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
        body: JSON.stringify({}),
      }
    );
    return await checkResponse(response);
  } catch (error) {
    console.error("Error fetching popular events:", error);
    throw error;
  }
};
