"use client";
import { useState } from "react";

function MoodChanger() {
  const [mood, setMood] = useState(":)");

  const changeMood = () => {
    let newMood = ":o";
    if (mood === ":o") newMood = ":(";
    setMood(newMood);
  };

  return (
    <div className="MoodChanger componentBox">
      Current Mood: {mood};
      <div className="space-x-4">
        <button
          className="bg-blue-500 round-xl text-white"
          onClick={changeMood}
        >
          Change Mood
        </button>
      </div>
    </div>
  );
}

export { MoodChanger };
