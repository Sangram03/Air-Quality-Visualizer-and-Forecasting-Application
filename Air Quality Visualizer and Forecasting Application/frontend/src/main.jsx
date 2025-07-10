import React from "react"; // ✅ Required for JSX
import { createRoot } from "react-dom/client"; // ✅ Needed for React 18+
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
