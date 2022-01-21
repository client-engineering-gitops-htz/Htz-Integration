import React, { useState } from "react";
import "../styles/DigitalMesh.css";
import { Card, InputGroup, Button, MenuItem } from "@blueprintjs/core";
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
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div>
      <div className="card-container">
        <Card className="car-card">
          <h5>
            <a href="#">IBM_1</a>
          </h5>
          <p>Card content</p>
          <div className="drop-down-menu">
            <div class="bp3-html-select">
              <select>
                <option selected>Choose a pick up location</option>
                {locations.map((location) => {
                  return <option>{location.name}</option>;
                })}
              </select>
              <span class="bp3-icon bp3-icon-double-caret-vertical"></span>
            </div>
            {/* {add a pop up menu for datepicker} */}
            <RentalDatePicker type={"Pickup"} />

            <TimePicker />
            <div class="bp3-html-select">
              <select>
                <option selected>Choose a drop off location</option>
                {locations.map((location) => {
                  return <option>{location.name}</option>;
                })}
              </select>
              <span class="bp3-icon bp3-icon-double-caret-vertical"></span>
            </div>
            <RentalDatePicker type={"Drop off"} />
            <TimePicker />
          </div>
          <Button>Submit</Button>
        </Card>
      </div>
    </div>
  );
};

export default SubmitForm;
