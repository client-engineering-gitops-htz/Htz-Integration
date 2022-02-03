import React from "react";
import SelectLocation from "./SelectLocation";

function LocationPicker({ type, setPickupLocation, setDropoffLocation }) {
  return (
    <SelectLocation
      type={type}
      setPickupLocation={setPickupLocation}
      setDropoffLocation={setDropoffLocation}
    >
      <option selected>{`Choose ${type} location`}</option>
    </SelectLocation>
  );
}

export default LocationPicker;
