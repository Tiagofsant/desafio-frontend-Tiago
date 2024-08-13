import axios from "axios";

export const resquestBase = axios.create({
  baseURL: "https://api.themoviedb.org/",
});
