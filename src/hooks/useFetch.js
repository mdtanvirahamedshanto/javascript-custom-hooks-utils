import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url, { method }) => {
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  let f;

  switch (method) {
    case "GET":
      f = axios.get(url);
      break;
    case "DELETE":
      f = axios.delete(url);
  }

  useEffect(() => {
    // ComponentDidUpdate
    f.then((response) => {
      setFetchedData(response.data);
      setIsLoading(false);
    }).catch((err) => setError(err));
  }, [url]);
  return [fetchedData, isLoading, error];
};

// GET POST DELETE
// CRUD - all http req
