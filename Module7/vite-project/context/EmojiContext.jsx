import React, { useState, useContext } from "react";

const EmojiContext = React.createContext();

export const EmojiProvider = ({ children }) => {
  const [mood, setMood] = useState(":)");

  const changeMood = () => {
    let newMood = ":o";
    if (mood === ":o") newMood = ":(";
    setMood(newMood);
  };

  const contextValue = { mood, changeMood };

  return (
    <EmojiContext.Provider value={contextValue}>
      {children}
    </EmojiContext.Provider>
  );
};

export const useEmoji = () => useContext(EmojiContext);
