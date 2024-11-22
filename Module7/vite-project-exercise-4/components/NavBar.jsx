import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MyThemeContext } from "../context/ThemeContext";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavBar() {
  const { theme } = useContext(MyThemeContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Button color="inherit" component={NavLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={NavLink} to="/login">
            Login Page
          </Button>
          <Button color="inherit" component={NavLink} to="/bitcoin-rates">
            Bitcoin Rates
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
