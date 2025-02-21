import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// const otMeta = document.createElement('meta');
// otMeta.httpEquiv = 'origin-trial';
// otMeta.content = 'TOKEN_GOES_HERE';
// document.head.append(otMeta);
