// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import "./utils/keyboard-navigation";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <App />
  // </StrictMode>,
);
