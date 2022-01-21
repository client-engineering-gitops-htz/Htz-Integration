import React, { useState } from "react";
import "../styles/DigitalMesh.css";
import { Card, Button } from "@blueprintjs/core";
import { TimePicker } from "@blueprintjs/datetime";
import RentalDatePicker from "./RentalDatePicker";
import "@blueprintjs/datetime/lib/css/blueprint-datetime.css";
import "@blueprintjs/core/lib/css/blueprint.css";

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
        <Card className="car-card">
          <div class="bp3-html-select">
            <select>
              <option selected>Choose a pick up location</option>
              {locations.map((location) => {
                return <option>{location.name}</option>;
              })}
            </select>
            <span class="bp3-icon bp3-icon-double-caret-vertical"></span>
          </div>

          <RentalDatePicker
            type={"Pickup"}
            setPickupDate={setPickupDate}
            setDropoffDate={setDropoffDate}
          />

          <TimePicker useAmPm={true} />
          <div class="bp3-html-select">
            <select>
              <option selected>Choose a drop off location</option>
              {locations.map((location) => {
                return <option>{location.name}</option>;
              })}
            </select>
            <span class="bp3-icon bp3-icon-double-caret-vertical"></span>
          </div>

          <RentalDatePicker
            type={"Drop off"}
            setPickupDate={setPickupDate}
            setDropoffDate={setDropoffDate}
          />

          <TimePicker useAmPm={true} />

          <Button>Submit</Button>
        </Card>
      </div>
    </div>
  );
};

export default SubmitForm;
