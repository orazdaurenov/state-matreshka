"use client";
import React, { useState } from "react";

type CounterProps = {
  onClick: () => void;
};

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <button
      className="bg-black p-2 text-gray-50"
      onClick={() => setCount(count + 1)}
    >
      {count}
    </button>
  );
};

export default Counter;
