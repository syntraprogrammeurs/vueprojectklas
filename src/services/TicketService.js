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
  getEvents() {
    return clientApiService("/events");
  },
  getEvent(id) {
    return clientApiService.get("/events/" + id);
  },
};
