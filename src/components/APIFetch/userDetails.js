import { useState, useEffect } from "react";
import axios from "axios";

export const UserDetail = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
      setFetchedData(response.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      {isLoading
        ? "Loading"
        : fetchedData.length > 0
        ? fetchedData.map((todo, index) => {
            return <div key={index}>{todo.userId}</div>;
          })
        : null}
    </div>
  );
};
