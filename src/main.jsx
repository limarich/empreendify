import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Routes } from "./routes/routes";

import { Login } from "./pages/Login";
import { LandingPage } from "./pages/LandingPage";

export let logged = false;

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {
        logged
        ? 
          <div style={{
            display: 'flex',
            width: '100%'
          }}>
            <Navbar />
            <Routes />
          </div>
        : 
          <LandingPage />
      }
      
    </BrowserRouter>
  </React.StrictMode>
);
