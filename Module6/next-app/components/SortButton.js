"use client";
import { useState } from "react";

export default function SortButton({ onClick, text }) {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  );
}
