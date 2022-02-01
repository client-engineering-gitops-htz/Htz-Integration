import React from "react";
import { HTMLSelect } from "@blueprintjs/core";
import { Select } from "@blueprintjs/select";
import SelectLocation from "./SelectLocation";
/*
const locations = [
  { name: "JFK", id: 1 },
  { name: "LGA", id: 2 },
  { name: "DFW", id: 3 },
];
*/

function LocationPicker({ type, setPickupLocation, setDropoffLocation }) {
  return (
    <SelectLocation
      type = {type} 
      setPickupLocation = {setPickupLocation}
      setDropoffLocation = {setDropoffLocation}
    >
    <option selected>{`Choose ${type} location`}</option>
    
    </SelectLocation>
  );
}
/*
   {usLocations.map((usLocations) => {
        return <option value={usLocations.OAG_CODE}>{usLocations.LOC_NM}</option>;
      })}
*/
export default LocationPicker;
