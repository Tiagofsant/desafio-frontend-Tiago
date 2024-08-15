import { useState, useCallback, useEffect } from "react";
import { getAllMovies } from "../api/services/requests";

// ----------------------------------------------------------

const useMovies = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getMovies = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const data: any = await getAllMovies();
      if (data && data.results) {
        setMovies(data.results);
      }
    } catch (err) {
      setError("Falha em carregar as informações");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return { movies, loading, error, refetch: getMovies };
};

export default useMovies;
