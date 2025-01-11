import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import theme from './theme';
import App from "./App.jsx";
import { ThemeProvider } from "@mui/material";
//@

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);