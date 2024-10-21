"use client";
import { useState } from "react";

function MoodChanger() {
  const [mood, setMood] = useState("happy");

  // Calls setMood with a fixed value of 'ecstatic'
  // begin with 'handle' prefix by convention
  const handleWinLotto = () => {
    setMood("ecstatic");
    console.log("MOOD: ", mood);
  };

  // Calls setMood with a conditional state value
  const handleRunningLate = () => {
    let newMood = "stressed";
    if (mood === "stressed") newMood = "really stressed";
    else if (mood === "really stressed") newMood = "giving up";
    setMood(newMood);
  };

  return (
    <div className="MoodChanger componentBox">
      Current Mood: {mood};
      <div className="space-x-4">
        <button
          className="bg-blue-500 round-xl text-white"
          onClick={() => setMood("Tired")}
        >
          Stayed Up Too Late
        </button>
        <button
          className="bg-blue-500 round-xl text-white"
          onClick={() => setMood("Hungry")}
        >
          Missed Lunch
        </button>
        <button
          className="bg-blue-500 round-xl text-white"
          onClick={() => setMood("Happy")}
        >
          Had A Pizza
        </button>
        <button
          className="bg-blue-500 round-xl text-white"
          onClick={handleRunningLate}
        >
          Running Late
        </button>
        <button
          className="bg-blue-500 round-xl text-white"
          onClick={handleWinLotto}
        >
          Won The Lotto!
        </button>
      </div>
    </div>
  );
}

export { MoodChanger };
