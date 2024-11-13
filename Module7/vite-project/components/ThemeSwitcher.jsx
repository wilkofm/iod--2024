import React, { useContext } from "react";
import { MyThemeContext, themes } from "../context/ThemeContext";

export default function ThemeSwitcher() {
  const { theme, setTheme, darkMode } = useContext(MyThemeContext);

  const switchTheme = () => {
    setTheme(darkMode ? themes.light : themes.dark);
  };

  return (
    <button
      onClick={switchTheme}
      style={{ background: theme.background, color: theme.foreground }}
    >
      Switch to {darkMode ? "Light" : "Dark"} theme
    </button>
  );
}
