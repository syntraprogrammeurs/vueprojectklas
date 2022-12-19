import axios from "axios";

const clientApiService = axios.create({
  baseURL: "https://my-json-server.typicode.com/syntraprogrammeurs/fake",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getEvents(perPage, page) {
    return clientApiService("/events?_limit=" + perPage + "&_page=" + page);
  },
  getEvent(id) {
    return clientApiService.get("/events/" + id);
  },
};
