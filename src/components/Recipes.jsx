import { useState } from "react";

const Recipes = () => {
  const [count, setCount] = useState(0);

  function handleCount() {
    console.log(count);
    return setCount(count + 1);
  }

  return (
    <div>
      <div>
        <h3>Current Recipes</h3>
        <h1>{count}</h1>
        <button onClick={handleCount}>UP</button>
      </div>
    </div>
  );
};

export default Recipes;
