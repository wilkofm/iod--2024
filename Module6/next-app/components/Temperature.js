"use client";
import { useState } from "react";

export function Temperature({ temp, initialUnits = "C" }) {
  // default to celcius
  // convert to Fahrenheit if units is F (or not C)

  const [units, setUnits] = useState(initialUnits);

  let displayTemp = units === "C" ? temp : (temp * 9) / 5 + 32;

  function convert() {
    setUnits((prevUnits) => (prevUnits === "C" ? "F" : "C"));
  }

  return (
    <span class="Temperature">
      <strong>
        {" "}
        {parseInt(displayTemp)}&deg;{units}{" "}
      </strong>
      <button onClick={convert}>Convert Temp</button>
    </span>
  );
}

// try adding a button to convert between C and F temps
