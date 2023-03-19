import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Routes } from "./routes/routes";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes />
    </BrowserRouter>
  </React.StrictMode>
);
