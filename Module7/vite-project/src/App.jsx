import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ClockDisplay } from "../components/ClockDisplay";
import { ActivityFinder } from "../components/ActivityFinder";
import { BitcoinRates } from "../components/BitcoinRates";
import { RefCounter } from "../components/RefCounter";
import { VideoPlayer } from "../components/VideoPlayer";
import { ReducerCounter } from "../components/ReducerCounter";
import { PostListReducer } from "../components/PostListReducer";
import { PostListState } from "../components/PostListState";
import { SubscribeForm } from "../components/SubcribeForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <SubscribeForm /> */}
      {/* <PostListState /> */}
      <PostListReducer />
      <ReducerCounter />
      <VideoPlayer />
      <RefCounter />
      <ClockDisplay />
      {/* <ActivityFinder /> */}
      <BitcoinRates />
    </>
  );
}

export default App;
