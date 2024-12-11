"use client";
import React, { ReactElement, useState } from "react";
import Counter from "./Counter";

export type ParentCounterProps = {
  grandParentCounter: (childrenCounts: number) => void;
  childrenCounts: number;
};

const ParentCounter = ({
  grandParentCounter,
  childrenCounts,
}: ParentCounterProps) => {
  const [parentCount, setParentCount] = useState(0);
  const [childCounters, setChildCounters] = useState<Array<ReactElement>>([]);
  const onClick = () => {
    const nextArray = [
      ...childCounters,
      <Counter
        grandParentCounter={grandParentCounter}
        childrenCounts={childrenCounts}
      />,
    ];
    grandParentCounter(childrenCounts);
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
