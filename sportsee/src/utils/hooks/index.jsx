import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function useFetch(url) {
  //const { userId } = useParams()
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setData(data /*.find((user) => user.id === userId)*/);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url /*, userId*/]);

  return { isLoading, data, error };
}
