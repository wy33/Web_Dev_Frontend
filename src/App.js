import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Sidebar from './components/Sidebar.js';

const App = () => {
  return (
    <Router>
          <Navbar />
          <Sidebar />
    </Router>
  );
};

export default App;


