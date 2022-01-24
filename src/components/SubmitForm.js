import React, { useState } from "react";
import "../styles/DigitalMesh.css";
import { Card, Button } from "@blueprintjs/core";
import { TimePicker } from "@blueprintjs/datetime";
import RentalDatePicker from "./RentalDatePicker";
import "@blueprintjs/datetime/lib/css/blueprint-datetime.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import { getDateOnlyWithTime } from "@blueprintjs/datetime/lib/esm/common/dateUtils";

const locations = [
  { name: "JFK", id: 1 },
  { name: "LGA", id: 2 },
  { name: "DFW", id: 3 },
];

const SubmitForm = () => {
  const [pickupLocation, setPickupLocation] = useState(locations[0]);
  const [pickupDate, setPickupDate] = useState(); // format date
  const [pickupTime, setPickupTime] = useState();
  const [dropoffLocation, setDropoffLocation] = useState();
  const [dropoffDate, setDropoffDate] = useState(); // format date
  const [dropoffTime, setDropoffTime] = useState();

  return (
    <div>
      <div className="card-container">
        <div className="trip-header">
            Book Your Trip
        </div>
        <Card className="car-card">
        <div className="trip-details">
          <div class="bp3-html-select">
            <select className="select-location">
              <option selected>Choose pick up location</option>
              {locations.map((location) => {
                return <option>{location.name}</option>;
              })}
            </select>
            {/* Fix center alignment on caret */}
            <span class="bp3-icon bp3-icon-double-caret-vertical"></span>   
          </div>
          <div class="bp3-html-select">
            <select className="select-location">
              <option selected>Choose drop off location</option>
              {locations.map((location) => {
                return <option>{location.name}</option>;
              })}
            </select>
            {/* Fix center alignment on caret */}
            <span class="bp3-icon bp3-icon-double-caret-vertical"></span>
          </div>

          <div className="date-time-details">
          <RentalDatePicker
            type={"Pickup"}
            setPickupDate={setPickupDate}
            setDropoffDate={setDropoffDate}
          />
          {/* Fix center alignment on digits */}
          <TimePicker />
          </div>
          
          <div className="date-time-details">
          <RentalDatePicker
            type={"Drop off"}
            setPickupDate={setPickupDate}
            setDropoffDate={setDropoffDate}
          />
          {/* Fix center alignment on caret */}
          <TimePicker/>
          </div>

          <Button className="submit-button">Submit</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SubmitForm;
