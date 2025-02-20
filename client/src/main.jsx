import { StrictMode } from "react";
import { ThemeProvider } from '@mui/material/styles'
import theme from "./utils/theme";

import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store.js";
import "./index.css";
import App from "./App.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
