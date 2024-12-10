"use client";
import React, { ReactElement, useState } from "react";
import { array } from "zod";
import Counter from "./Counter";

const ParentCounter = () => {
  const [parentCount, setParentCount] = useState(0);
  const [childCounters, setChildCounters] = useState<Array<ReactElement>>([]);
  const onClick = () => {
    const nextArray = [...childCounters, <Counter />];
    setParentCount(parentCount + 1);
    setChildCounters(nextArray);
  };
  return (
    <>
      <button
        className="rounded-md bg-red-800 px-1 py-1 text-gray-200"
        onClick={onClick}
      >
        {parentCount}
      </button>
      <ul>
        {childCounters.map((count, index) => (
          <li key={index}>{count}</li>
        ))}
      </ul>
    </>
  );
};

export default ParentCounter;
