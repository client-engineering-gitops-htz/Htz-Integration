import React from "react";
import "@blueprintjs/datetime/lib/css/blueprint-datetime.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import { DatePicker } from "@blueprintjs/datetime";

function RentalDatePicker({ type }) {
  return (
    <div
      style={{
        display: "block",
        width: 400,
        padding: 30,
      }}
    >
      <h4>Select a {type} Date</h4>
      <DatePicker />
    </div>
  );
}

export default RentalDatePicker;
