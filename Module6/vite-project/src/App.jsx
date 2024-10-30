import { useState } from "react";
import reactLogo from "./assets/react.svg";
import ExplodingBomb from "../components/ExplodingBomb";
import viteLogo from "/vite.svg";
import "./App.css";
import Welcome from "./Welcome";
import PropsDisplayer from "./PropsDisplayer";
import Greeting from "./Greeting";

function App() {
  const [count, setCount] = useState(0);

  const spiderman = {
    name: "Spiderman",
    alterEgo: "Peter Parker",
    catchPhrase: "With great power comes great responsibility",
  };

  const spideyJSX = (
    <div>
      <h3>{spiderman.name}</h3>
      <blockquote>{spiderman.catchPhrase}</blockquote>
      <cite>{spiderman.alterEgo}</cite>
    </div>
  );

  return (
    <>
      <ExplodingBomb />
      <Greeting name="Friends!">Great to see you!</Greeting>
      <Welcome name="students">
        <p>Children of Welcome</p>
      </Welcome>

      {/* Renders the component with no props */}
      <PropsDisplayer name="Max" />

      {/* Renders the component with a single prop 'myProp' */}
      <PropsDisplayer movies={["Se7en", "Gone Girl"]} />

      {/* Renders the component with multiple props - add your own! */}
      <PropsDisplayer prop1="first" prop2="second" prop3={3} />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Spidey JSX</h1>
      {spideyJSX}
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
