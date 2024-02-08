import { useFetch } from "../../hooks/useFetch";

export const APIFetch = () => {
  const [fetchedData, isLoading, error] = useFetch(
    "https://jsonplaceholder.typicode.com/todos",
    { method: "GET" }
  );

  return (
    <div>
      {isLoading
        ? "Loading"
        : fetchedData.length > 0
        ? fetchedData.map((todo, index) => {
            return <div key={index}>{todo.title}</div>;
          })
        : null}
      <br />
      {error && <div>Hey there's an error </div>}
    </div>
  );
};
