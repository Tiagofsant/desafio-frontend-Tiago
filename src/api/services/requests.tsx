import axios from "axios";
import { TOKEN } from "../server/axios";

// ------------------------------------------------------------------

export async function getAllMovies() {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie",
    params: {
      include_adult: "false",
      include_video: "false",
      language: "pt-BR",
      page: "1",
      sort_by: "popularity.desc",
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function getAllCelebrities() {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/person/popular",
    params: { language: "pt-BR", page: "1" },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    return error;
  }
}
