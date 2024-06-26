"use client";
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  function rest() {
    setCount(0);
  }
  return (
    <div className="h-[30%] w-[30%] backdrop-blur-lg bg-transparent flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-10">Counter</h1>
      <div className="flex gap-5 w-80 items-center justify-center h-20 rounded-xl">
        <button
          onClick={decrement}
          className="h-10 w-10 rounded-lg shadow-md bg-red-500"
        >
          -
        </button>
        <div className="text-6xl">{count}</div>
        <button
          onClick={increment}
          className="h-10 w-10 rounded-lg shadow-md bg-green-500"
        >
          +
        </button>
        <button
          onClick={rest}
          className="h-10 w-20 text-white rounded-lg shadow-md bg-blue-500"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
