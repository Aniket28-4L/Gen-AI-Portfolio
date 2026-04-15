import { createRoot } from "react-dom/client";
import App from "./App";
import CinematicLoader from "./components/CinematicLoader";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <CinematicLoader>
    <App />
  </CinematicLoader>,
);
