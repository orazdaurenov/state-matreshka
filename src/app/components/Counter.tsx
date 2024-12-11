"use client";
import React, { useState } from "react";
import { ParentCounterProps } from "./ParentCounter";

const Counter = (props: ParentCounterProps) => {
  const [count, setCount] = useState(0);
  return (
    <button
      className="bg-black p-2 text-gray-50"
      onClick={() => {
        setCount(count + 1);
        props.grandParentCounter(props.childrenCounts);
      }}
    >
      {count}
    </button>
  );
};

export default Counter;
