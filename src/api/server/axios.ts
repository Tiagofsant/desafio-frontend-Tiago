import axios from "axios";

export const resquestBase = axios.create({
  baseURL: "https://api.themoviedb.org/",
});

export const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzUwOWNjMDRlMjg0MjFmN2JkMzk5MjI3OGU5M2Q1YiIsIm5iZiI6MTcyMzUxNTUxNy45NTYyOTcsInN1YiI6IjY2YmFjMDFjNGFiNDQyMDJmMGI3N2Q4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4e4slh9-OfjElamDUjs9ccR1hMYT6lRDHegWdnXBaEo";
