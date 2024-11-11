import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './sidebar/sidebar';
// Import other components if needed

const App = () => {
  return (
    <Router>
      <div>
        <Sidebar />
       
      </div>
    </Router>
  );
};

export default App;
