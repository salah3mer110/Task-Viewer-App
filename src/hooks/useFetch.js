import { useEffect, useState } from "react";
import api from "../api/api";

export function useFetch(url, reloadKey = 0) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    async function fetchData() {
      try {
        const response = await api.get(url);
        if (isMounted) {
          const { data: result } = response;
          setData(result);
        }
      } catch (error) {
        if (isMounted) setError(error.message);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }
    fetchData();
    return () => {
      isMounted = false;
    };
  }, [url, reloadKey]);
  return { data, isLoading, error };
}
