import React, { useState } from "react";
import SubmitForm from "./SubmitForm";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import LogConversions from "./LogConversions";

const Dashboard = () => {
  const [inboundBooking, setInboundBooking] = useState();
  const [carBookingResults, setCarBookingResults] = useState();

  return (
    <div className="dashboard">
      <Routes>
        <Route
          path="/"
          element={<SubmitForm setInboundBooking={setInboundBooking} />}
        />
        <Route path="/landing" element={<LandingPage />} />
        <Route
          path="/logs"
          element={<LogConversions inboundBooking={inboundBooking} />}
        />
      </Routes>
    </div>
  );
};

export default Dashboard;
