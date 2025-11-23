import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element with id 'root' not found");
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// Notes:
// This is the standard React 18 entry setup with StrictMode and BrowserRouter wrapped around the app.
// The check for the root element keeps us from failing silently if the index.html markup changes.
// Any future global providers can be added here around <App /> if the project grows. 
