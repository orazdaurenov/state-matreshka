import React, { ReactElement, useState } from "react";
import ParentCounter from "./ParentCounter";

const GrandParentCounter = () => {
  const [grandParentCount, setGrandParentCount] = useState(0);
  const [parentCounters, setParentCounters] = useState<Array<ReactElement>>([]);
  const handleClick = () => {
    const nextParentArray = [...parentCounters, <ParentCounter />];
    setGrandParentCount(grandParentCount + 1);
    setParentCounters(nextParentArray);
  };
  return (
    <>
      <button
        className="rounded-full bg-black p-3 text-slate-600"
        onClick={handleClick}
      >
        {grandParentCount}
      </button>
      <ul>
        {parentCounters.map((count, index) => (
          <li key={index}>{count}</li>
        ))}
      </ul>
    </>
  );
};

export default GrandParentCounter;
