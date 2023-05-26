import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Routes } from "./routes/routes";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <div style={{
        display: 'flex',
        
      }}>
        <Navbar />
        <Routes />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
