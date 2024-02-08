import { useCounter } from "../../hooks/useCounter";
export const Counter = () => {
  const [count, increment, decrement] = useCounter(5);
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
};

// why we use custom hooks ?
// share logic
// DRY Principle - Do Not Repeat Yourself
