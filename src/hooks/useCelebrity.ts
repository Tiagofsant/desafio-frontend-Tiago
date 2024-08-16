import { useCallback, useEffect, useState } from "react";
import { getCelebritiesById } from "../api/services/requests";
import { Celebrity } from "../types";

// ----------------------------------------------------------

const useCelebrity = (id: number) => {
  const [celebrity, setCelebrity] = useState<Celebrity>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getCelebrity = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const data: any = await getCelebritiesById(id);
      if (data) {
        setCelebrity(data);
      }
    } catch (err) {
      setError("Falha em carregar as informações");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getCelebrity();
  }, [getCelebrity]);

  return { celebrity, loading, error, refetch: getCelebrity };
};

export default useCelebrity;
