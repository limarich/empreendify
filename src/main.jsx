import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Routes } from "./routes/routes";

import { Login } from "./pages/Login";

export let logged = true;

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {
        logged
        ? 
          <div style={{
            display: 'flex',
            width: '100vw'
          }}>
            <Navbar />
            <Routes />
          </div>
        : 
          <Login />
      }
      
    </BrowserRouter>
  </React.StrictMode>
);
