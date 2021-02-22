import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "../app-router";
import Sidebar from "../sidebar/sidebar";

import "./app.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Sidebar />
        <div className="app_content">
          <AppRouter />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
