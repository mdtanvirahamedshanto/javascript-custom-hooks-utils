import { useState } from "react";

export const useCounter = (value = 3) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + value);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return [count, increment, decrement];
};
