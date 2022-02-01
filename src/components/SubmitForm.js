import React, { useState, useEffect } from "react";
import "../styles/DigitalMesh.css";
import { Card, Button, HTMLSelect } from "@blueprintjs/core";
import { TimePicker } from "@blueprintjs/datetime";
import RentalDatePicker from "./RentalDatePicker";
import LocationPicker from "./LocationPicker";
import "@blueprintjs/datetime/lib/css/blueprint-datetime.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import { getDateOnlyWithTime } from "@blueprintjs/datetime/lib/esm/common/dateUtils";
import { Link } from "react-router-dom";

const locations = [
  { name: "JFK", id: 1 },
  { name: "LGA", id: 2 },
  { name: "DFW", id: 3 },
];

// SubmitForm schema
// {
//   pickupLocation: Object,
//   dropoffLocation: Object,
//   pickupDate: String,
//   dropoffDate: String,
//   pickupTime: String,
//   dropoffTime: String
// }

const SubmitForm = () => {
  const [pickupLocation, setPickupLocation] = useState();
  const [pickupDate, setPickupDate] = useState(); // format date
  const [pickupTime, setPickupTime] = useState();
  const [dropoffLocation, setDropoffLocation] = useState();
  const [dropoffDate, setDropoffDate] = useState();
  const [dropoffTime, setDropoffTime] = useState();
  const [formFilled, setFormFilled] = useState(false);

  useEffect(() => {
    if (
      pickupLocation &&
      pickupDate &&
      pickupTime &&
      dropoffLocation &&
      dropoffDate &&
      dropoffTime
    ) {
      setFormFilled(true);
    }
  }, [
    pickupLocation,
    pickupDate,
    pickupTime,
    dropoffLocation,
    dropoffDate,
    dropoffTime,
  ]);

  return (
    <div>
      <div className="card-container">
        <div className="trip-header">Book Your Trip</div>
        <Card className="car-card">
          <div className="trip-details">
            <LocationPicker
              type={"Pick-Up"}
              setPickupLocation={setPickupLocation}
              setDropoffLocation={setDropoffLocation}
            />

            <LocationPicker
              type={"Drop-Off"}
              setPickupLocation={setPickupLocation}
              setDropoffLocation={setDropoffLocation}
            />

            <div className="date-time-details">
              <RentalDatePicker
                type={"Pick-Up"}
                setPickupDate={setPickupDate}
                setDropoffDate={setDropoffDate}
                pickupDate={pickupDate}
              />
              {/* Fix center alignment on digits */}
              <TimePicker />
            </div>

            <div className="date-time-details">
              <RentalDatePicker
                type={"Drop-Off"}
                setPickupDate={setPickupDate}
                setDropoffDate={setDropoffDate}
                dropoffDate={dropoffDate}
              />
              {/* Fix center alignment on caret */}
              <TimePicker />
            </div>

            <Link className={!formFilled ? "disabled-link" : ""} to="/landing">
              <Button
                disabled={!formFilled}
                className="submit-button"
                onClick={() => {
                  console.log("pickup", pickupLocation);
                  console.log("dropoff", dropoffLocation);

                  console.log("pickup date", pickupDate);
                  console.log("dropoff date", dropoffDate);

                  console.log("pickup time", pickupTime);
                  console.log("dropoff date", dropoffTime);
                }}
              >
                Submit
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SubmitForm;
