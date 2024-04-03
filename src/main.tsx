import React from "react";
import ReactDOM from "react-dom/client";
import "@/assets/styles/index.css";
import BrowserRouter from "./router/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter></BrowserRouter>
  </React.StrictMode>
);
