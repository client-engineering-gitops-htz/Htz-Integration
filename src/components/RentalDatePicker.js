import React from "react";
import "@blueprintjs/datetime/lib/css/blueprint-datetime.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import { DatePicker } from "@blueprintjs/datetime";
import { Button } from "@blueprintjs/core";

import { Classes, Popover2 } from "@blueprintjs/popover2";

function RentalDatePicker({ type, setPickupDate, setDropoffDate }) {
  return (
    <div>
      <Popover2
        interactionKind="click"
        popoverClassName={Classes.POPOVER2_CONTENT_SIZING}
        placement="bottom"
        content={
          <DatePicker
            onChange={(selectedDate) => {
              type === "pickup]"
                ? setPickupDate(selectedDate)
                : setDropoffDate(selectedDate);
            }}
          />
        }
        renderTarget={({ isOpen, ref, ...targetProps }) => (
          <Button
            {...targetProps}
            elementRef={ref}
            intent="primary"
            text={`Select a ${type} date`}
          />
        )}
      />
    </div>
  );
}

export default RentalDatePicker;
