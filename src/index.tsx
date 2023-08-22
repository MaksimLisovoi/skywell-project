import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#e25728",
    },
    secondary: {
      main: "#e25728",
    },
    background: {
      default: "#000000",
      paper: "#000000",
    },
    text: {
      primary: "#ffffff",
      secondary: "#ffffff",
    },
  },
  typography: {
    fontFamily: "DM Mono",
    body2: {
      fontFamily: "Manrope",
      fontWeight: 300,
    },
    button: {
      fontWeight: 300,
    },
    overline: {
      fontWeight: 300,
    },
    caption: {
      fontWeight: 400,
    },
  },
  shape: {
    borderRadius: 20,
  },
  spacing: 8,
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
