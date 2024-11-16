import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LoginPage from "../pages/LoginPage";
import Homepage from "../pages/HomePage";
import BitcoinRatesPage from "../pages/BitcoinRatesPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Homepage />
      <LoginPage />
      <BitcoinRatesPage />
    </>
  );
}

export default App;
