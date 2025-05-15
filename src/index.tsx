import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Bentolio } from "./screens/Bentolio";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Bentolio />
  </StrictMode>,
);
