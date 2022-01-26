import React from 'react';
import './styles/DigitalMesh.css';
import Dashboard from './components/Dashboard';
import Topbar from './components/Topbar';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="DigitalMesh">
      <Topbar/>
      <Routes>
        <Route path="/" exact component={() => <Dashboard />} />
        <Route path="/landing" exact component={() => <Topbar />} />
      </Routes>
      
      
    </div>
  );
}

export default App;
