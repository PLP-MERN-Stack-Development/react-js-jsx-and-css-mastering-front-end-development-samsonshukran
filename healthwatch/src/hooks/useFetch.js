import { useState, useEffect } from "react";

export const useFetch = (apiFunc) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiFunc().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, [apiFunc]);

  return { data, loading };
};
