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
import { UserProvider } from "../context/UserContext";
import { LoginForm } from "../components/LoginForm";
import MyThemeProvider from "../context/ThemeContext";
import ThemeSwitcher from "../components/ThemeSwitcher";
import { MoodChanger } from "../components/Emoji";
import { EmojiProvider } from "../context/EmojiContext";
import NavBar from "../components/NavBar";
import AppRoutes from "../components/AppRoutes";
import BasicGrid from "../components/BasicGrid";
import CustomCard from "../components/CustomCard";
import MUIForm from "../components/MUIForm";
import MUIDialog from "../components/MUIDialogue";
import SxExample from "../components/MUIStyling";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UserProvider>
        <MyThemeProvider>
          <CustomCard />
          <NavBar />
          <AppRoutes />
          <BasicGrid />
          <MUIForm />
          <MUIDialog text="my first MUI dialogue" />
          <SxExample />
          {/* <ThemeSwitcher />
          <LoginForm /> */}
          {/* <SubscribeForm />{} */}
          {/* <PostListState />{} */}
          {/* <EmojiProvider>
            <MoodChanger />
            <PostListReducer />
            <ReducerCounter />
            <VideoPlayer />
            <RefCounter />
            <ClockDisplay />{} */}
          {/* <ActivityFinder />{} */}
          {/* <BitcoinRates />
          </EmojiProvider> */}
        </MyThemeProvider>
      </UserProvider>
    </>
  );
}

export default App;
