import React from "react";
import "./styles/DigitalMesh.css";
import Dashboard from "./components/Dashboard";
import Topbar from "./components/Topbar";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import LogConversions from "./components/LogConversions";
import AnalyticsDashboard from "./components/AnalyticsDashboard";

function App() {
  return (
    <div className="DigitalMesh">
      <Topbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/logs" element={<LogConversions />} />
        <Route path="/analytics" element={<AnalyticsDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
