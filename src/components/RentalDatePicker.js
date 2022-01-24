import React from "react";
import "@blueprintjs/datetime/lib/css/blueprint-datetime.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import { DateInput } from "@blueprintjs/datetime";
import { Button } from "@blueprintjs/core";

import { Classes, Popover2 } from "@blueprintjs/popover2";

function RentalDatePicker({
  type,
  setPickupDate,
  setDropoffDate,
  pickupDate,
  dropoffDate,
}) {
  return (
    <div>
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
