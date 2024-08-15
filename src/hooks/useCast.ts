import { useCallback, useEffect, useState } from "react";
import { getMovieCastById } from "../api/services/requests";

// ----------------------------------------------------------

const useCast = (id: number) => {
  const [cast, setCast] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getCast = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const data: any = await getMovieCastById(533535);
      if (data) {
        setCast(data.cast);
      }
    } catch (err) {
      setError("Falha em carregar as informações");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getCast();
  }, [getCast]);

  return { cast, loading, error, refetch: getCast };
};

export default useCast;
