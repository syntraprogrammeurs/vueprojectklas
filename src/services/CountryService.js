import axios from "axios";

const clientApiService = axios.create({
  baseURL: "https://restcountries.com/v2/all",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getCountries() {
    return clientApiService("/");
  },
};
