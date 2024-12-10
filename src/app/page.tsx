"use client";
import { useState } from "react";
import Counter from "./components/Counter";

export default function HomePage() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <Counter onclick={handleClick} count={count} />
    </>
  );
}
