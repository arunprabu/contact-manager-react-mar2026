import { useState } from "react";

const CounterPage = () => {
  // component-wide updateable data
  let [count, setCount] = useState(10);

  const handleIncrement = () => {
    // never update the state directly; instead use the setter function provided by useState
    setCount(count + 1);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">Counter Page</h1>

      <p>Counter Value: {count}</p>
      <button
        type="button"
        className="bg-blue-500 rounded-2xl text-white px-4 py-2"
        onClick={handleIncrement}
      >
        Increment
      </button>
      <button
        type="button"
        className="bg-red-500 rounded-2xl text-white px-4 py-2"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>

      <hr />
      <h2>Conditional Rendering</h2>
    </div>
  );
};

export default CounterPage;
