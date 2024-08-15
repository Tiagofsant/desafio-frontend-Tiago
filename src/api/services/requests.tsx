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

export async function getMoviesDetailsById() {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/533535",
    params: { language: "pt-BR" },
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

export async function getMovieTrailerUrlById() {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/533535/videos",
    params: { language: "pt-BR" },
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

export async function getAllMoviesSimilar() {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/533535/similar",
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

export async function getMovieCastById() {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/533535/credits",
    params: { language: "en-US" },
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

export async function getCelebritiesById() {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/person/1245",
    params: { language: "pt-BR" },
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

export async function getCelebritiesWorksByID() {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/person/1245/movie_credits",
    params: { language: "pt-BR" },
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
