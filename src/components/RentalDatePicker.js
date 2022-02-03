import React from "react";
import "@blueprintjs/datetime/lib/css/blueprint-datetime.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import { DateInput } from "@blueprintjs/datetime";

function RentalDatePicker({
  type,
  setPickupDate,
  setDropoffDate,
  pickupDate,
  dropoffDate,
}) {
  return (
    <div className="date-container">
      {type === "Pick-Up" && (
        <DateInput
          formatDate={(date) => date.toLocaleDateString()}
          onChange={(selectedDate) => {
            if (type === "Pick-Up") setPickupDate(selectedDate);
          }}
          parseDate={(str) => new Date(str)}
          placeholder={"M/D/YYYY"}
          highlightCurrentDay={true}
          value={!!pickupDate ? pickupDate : new Date()}
        />
      )}

      {type === "Drop-Off" && (
        <DateInput
          formatDate={(date) => date.toLocaleDateString()}
          onChange={(selectedDate) => {
            if (type === "Drop-Off") setDropoffDate(selectedDate);
          }}
          parseDate={(str) => new Date(str)}
          placeholder={"M/D/YYYY"}
          highlightCurrentDay={true}
          value={!!dropoffDate ? dropoffDate : new Date()}
        />
      )}
    </div>
  );
}

export default RentalDatePicker;
