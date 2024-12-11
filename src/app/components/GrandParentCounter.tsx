import React, { ReactElement, useState } from "react";
import ParentCounter from "./ParentCounter";

const GrandParentCounter = () => {
  const [childrenCounts, setChildrenCounts] = useState(0);
  const [grandParentCount, setGrandParentCount] = useState(0);
  const [parentCounters, setParentCounters] = useState<Array<ReactElement>>([]);

  const gpCounter = (childrenCounts: number) => {
    setChildrenCounts(childrenCounts + 1);
  };

  const handleClick = () => {
    const nextParentArray = [
      ...parentCounters,
      <ParentCounter
        childrenCounts={childrenCounts}
        grandParentCounter={gpCounter}
      />,
    ];
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
      <button
        className="rounded-full bg-orange-500 p-3 text-slate-600"
        onClick={handleClick}
      >
        {childrenCounts}
      </button>
      <ul>
        {parentCounters.map((count, index) => (
          <li key={index}>
            {" "}
            <ParentCounter
              childrenCounts={childrenCounts}
              grandParentCounter={gpCounter}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default GrandParentCounter;
