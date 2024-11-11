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
        <Home/>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
