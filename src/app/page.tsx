"use client";
import { useState } from "react";
import Counter from "./components/Counter";
import ParentCounter from "./components/ParentCounter";
import GrandParentCounter from "./components/GrandParentCounter";

export default function HomePage() {
  return (
    <>
      <GrandParentCounter />
    </>
  );
}
