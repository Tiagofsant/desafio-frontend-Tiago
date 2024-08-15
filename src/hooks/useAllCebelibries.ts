import { useCallback, useEffect, useState } from "react";
import { getAllCelebrities } from "../api/services/requests";
import { Celebrity } from "../types";

// ----------------------------------------------------------

const useAllCelebrites = () => {
  const [celebrities, setCelebrities] = useState<Celebrity[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getCelebrities = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const data: any = await getAllCelebrities();
      if (data && data.results) {
        setCelebrities(data.results);
      }
    } catch (err) {
      setError("Falha em carregar as informações");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getCelebrities();
  }, [getCelebrities]);

  return { celebrities, loading, error, refetch: getCelebrities };
};

export default useAllCelebrites;
