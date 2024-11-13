import React from "react";
import { useEmoji } from "../context/EmojiContext";

function MoodChanger() {
  const { mood, changeMood } = useEmoji();

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
