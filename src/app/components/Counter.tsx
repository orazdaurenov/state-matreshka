import React from "react";

type CounterProps = {
  count: number;
  onclick: () => void;
};

const Counter = ({ count, onclick }: CounterProps) => {
  return (
    <button className="bg-black p-2 text-gray-50" onClick={onclick}>
      {count}
    </button>
  );
};

export default Counter;
