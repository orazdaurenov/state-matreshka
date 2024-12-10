"use client";
import { useState } from "react";
import Counter from "./components/Counter";
import ParentCounter from "./components/ParentCounter";

export default function HomePage() {
  return (
    <>
      <ParentCounter />
    </>
  );
}
