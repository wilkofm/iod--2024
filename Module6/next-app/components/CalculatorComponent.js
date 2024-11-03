"use client";
import { useState } from "react";

export function Calculator() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    let calculatorResult;

    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    switch (operator) {
      case "+":
        calculatorResult = num1 + num2;
        break;
      case "-":
        calculatorResult = num1 - num2;
        break;
      case "x":
        calculatorResult = num1 * num2;
        break;
      case "÷":
        calculatorResult = num1 / num2;
        break;
      default:
        calculatorResult = "Select an operator";
    }

    setResult(calculatorResult);
  };

  const handleReset = () => {
    setNumber1("");
    setNumber2("");
    setOperator("");
    setResult(null);
  };

  return (
    <>
      <input
        type="text"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
        placeholder="First number"
      />
      <input
        type="text"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
        placeholder="Second number"
      />
      <div>
        <button onClick={() => setOperator("+")}>+</button>
        <button onClick={() => setOperator("-")}>-</button>
        <button onClick={() => setOperator("x")}>x</button>
        <button onClick={() => setOperator("÷")}>÷</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      {result !== null && <h2>Result: {result}</h2>}
    </>
  );
}
