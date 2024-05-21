import { useState } from "react";

const Cards = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <button onClick={increment}>+</button>
      {count}
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Cards;
