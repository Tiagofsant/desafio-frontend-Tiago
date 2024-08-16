import { useCallback, useEffect, useState } from "react";
import { getCelebritiesWorksByID } from "../api/services/requests";
import { Celebrity } from "../types";

// ----------------------------------------------------------

const useCelebrityWorks = (id: number) => {
  const [celebrityWorks, setCelebrityWorks] = useState<Celebrity[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getCelebrity = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const data: any = await getCelebritiesWorksByID(id);
      if (data) {
        setCelebrityWorks(data.cast);
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

  return { celebrityWorks, loading, error, refetch: getCelebrity };
};

export default useCelebrityWorks;
