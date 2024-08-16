import { useCallback, useEffect, useState } from "react";
import { getAllSimilarMovies } from "../api/services/requests";

// ----------------------------------------------------------

const useSimilarMovies = () => {
  const [similarMovies, setSimilarMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getSimilarMovies = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const data: any = await getAllSimilarMovies(533535);
      if (data && data.results) {
        setSimilarMovies(data.results);
      }
    } catch (err) {
      setError("Falha em carregar as informações");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getSimilarMovies();
  }, [getSimilarMovies]);

  return { similarMovies, loading, error, refetch: getSimilarMovies };
};

export default useSimilarMovies;
