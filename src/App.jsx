import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./sidebar/sidebar";

import { Outlet } from "react-router-dom";
import Home from "./pages/home";
// Import other components if needed

const App = () => {
  return (
    <>
      <div>
        <div className="sidebar">
          <Home />
        </div>
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default App;
