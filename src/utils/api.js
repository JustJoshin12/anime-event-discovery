
import api from "./customAxios";

// Axios instances for APIs
// const eventsUrlApi = axios.create({
//   baseURL: eventsUrl,
// });

// const newsUrlApi = axios.create({
//   baseURL: newsUrl,
// });

// Fetch latest news
export const latestNewsApi = async () => {
  try {
    const response = await api.get("/latestNews");
    return response.data;
  } catch (error) {
    console.error("Error fetching latest news:", error);
    throw error;
  }
};

// Fetch upcoming events
export const upcomingEventsApi = async () => {
  try {
    const response = await api.post("api/secure/readAllDocuments/UpcomingEvents", {});
    return response.data;
  } catch (error) {
    console.error("Error fetching upcoming events:", error);
    throw error;
  }
};

// Fetch popular events
export const popularEventsApi = async () => {
  try {
    const response = await api.post("api/secure/readAllDocuments/PopularEvents", {});
    return response.data;
  } catch (error) {
    console.error("Error fetching popular events:", error);
    throw error;
  }
};
