import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LoginPage from "../pages/LoginPage";
import Homepage from "../pages/HomePage";
import BitcoinRatesPage from "../pages/BitcoinRatesPage";
import { UserProvider } from "../context/UserContext";
import MyThemeProvider from "../context/ThemeContext";
import AppRoutes from "../routes/AppRoutes";
import NavBar from "../components/NavBar";
import { ThemeProvider } from "@mui/material";
import { tealTheme } from "../themes/tealTheme";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UserProvider>
        <MyThemeProvider>
          <ThemeProvider theme={tealTheme}>
            <NavBar />
          </ThemeProvider>
          <AppRoutes />
        </MyThemeProvider>
      </UserProvider>
    </>
  );
}

export default App;
