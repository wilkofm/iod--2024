import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ClockDisplay } from "../components/ClockDisplay";
import { ActivityFinder } from "../components/ActivityFinder";
import { BitcoinRates } from "../components/BitcoinRates";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ClockDisplay />
      <ActivityFinder />
      <BitcoinRates />
    </>
  );
}

export default App;
