import { useCallback, useEffect, useState } from "react";
import { getMoviesDetailsById } from "../api/services/requests";
import { Genre, Movie, MovieContent } from "../types";

// -----------------------------------------------------------------------------------

const useMoviesDetais = (id: number) => {
  const [movieDetails, setMovieDetails] = useState<Movie | null>(null);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getMoviesDetails = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const data: MovieContent = await getMoviesDetailsById(id);
      if (data) {
        setMovieDetails(data);
        setGenres(data.genres);
      }
    } catch (err) {
      setError("Falha em carregar as informações");
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getMoviesDetails();
  }, [getMoviesDetails]);

  return { movieDetails, genres, loading, error, refetch: getMoviesDetails };
};

export default useMoviesDetais;
