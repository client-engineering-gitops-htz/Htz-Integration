import React from "react";
import { HTMLSelect } from "@blueprintjs/core";

const locations = [
  { name: "JFK", id: 1 },
  { name: "LGA", id: 2 },
  { name: "DFW", id: 3 },
];

function LocationPicker({ type, setPickupLocation, setDropoffLocation }) {
  return (
    <HTMLSelect
      large={true}
      onChange={(e) => {
        if (type === "Pick-Up") setPickupLocation(e.target.value);
        if (type === "Drop-Off") setDropoffLocation(e.target.value);
      }}
    >
      <option selected>{`Choose ${type} location`}</option>
      {locations.map((location) => {
        return <option value={location.name}>{location.name}</option>;
      })}
    </HTMLSelect>
  );
}

export default LocationPicker;
