import React from 'react';
import './styles/DigitalMesh.css';
import Dashboard from './components/Dashboard';
import Topbar from './components/Topbar';
import { Routes, Route, Link } from "react-router-dom";
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="DigitalMesh">
      <Topbar/>
      {/* <Dashboard /> */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/landing" element={<LandingPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
