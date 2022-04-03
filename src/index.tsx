import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
const container: any = document.getElementById("app");
const root = createRoot(container);
import App from "./app";
import "./index.less";

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
