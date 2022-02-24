import React from "react";
import { Card } from "@blueprintjs/core";

const LogConversions = ({ inboundBooking }) => {
  return (
    <div className="logs-dashboard">
      <div className="input-container">
        <div>
        <h1>Our Input Request:</h1>
        <Card className="input-log-card">
          <div>
            <pre>{JSON.stringify(inboundBooking, null, 2)}</pre>
          </div>
        </Card>
        </div>
        <div>
        <h1>Input COBOL:</h1>
        <Card className="input-log-card">
          <div>
            <pre>{JSON.stringify(inboundBooking, null, 2)}</pre>
          </div>
        </Card>
        </div>
      </div>
      <div className="output-container">
      <div>

      <h1>Outbound COBOL:</h1>
        <Card className="input-log-card">
          <div>
            <pre>{JSON.stringify(inboundBooking, null, 2)}</pre>
          </div>
        </Card>
      </div>
      <div>
      <h1>Our Output:</h1>
      <Card className="output-log-card"></Card>
      </div>
      </div>
    </div>
  );
};

export default LogConversions;
