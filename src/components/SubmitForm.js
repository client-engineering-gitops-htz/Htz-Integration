import React, { useState, useEffect } from "react";
import "../styles/DigitalMesh.css";
import { Card, Button } from "@blueprintjs/core";
import { TimePicker } from "@blueprintjs/datetime";
import RentalDatePicker from "./RentalDatePicker";
import LocationPicker from "./LocationPicker";
import "@blueprintjs/datetime/lib/css/blueprint-datetime.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import { Link } from "react-router-dom";


const SubmitForm = ({ setInboundBooking }) => {
  const [pickupLocation, setPickupLocation] = useState();
  const [pickupDate, setPickupDate] = useState(); // format date
  const [pickupTime, setPickupTime] = useState();
  const [dropoffLocation, setDropoffLocation] = useState();
  const [dropoffDate, setDropoffDate] = useState();
  const [dropoffTime, setDropoffTime] = useState();
  const [formFilled, setFormFilled] = useState(false);

  const handleSubmit = () => {
    const pickupDateFormatted = pickupDate
      .toLocaleDateString("sv-SE")
      .split("-")
      .join("");

    const dropoffDateFormatted = dropoffDate
      .toLocaleDateString("sv-SE")
      .split("-")
      .join("");

    const input = {
      PuIsoLocationCode: {
        PuLocation: pickupLocation.OAG_CODE,
      },
      PuDate: pickupDateFormatted,
      PuTime: pickupTime.toLocaleTimeString("en-GB"),
      DoIsoLocationCode: {
        DoLocation: dropoffLocation.OAG_CODE,
      },
      DoDate: dropoffDateFormatted,
      DoTime: dropoffTime.toLocaleTimeString("en-GB"),
    };

    setInboundBooking(input);

    console.log(input);
  };

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
            <div className="trip-detail-container-labels">
            <h4>Pick-Up Location</h4>
            <LocationPicker
              type={"Pick-Up"}
              setPickupLocation={setPickupLocation}
              setDropoffLocation={setDropoffLocation}
              />
            </div>
            <div className="trip-detail-container-labels">
            <h4>Drop-off Location</h4>
            <LocationPicker
              type={"Drop-Off"}
              setPickupLocation={setPickupLocation}
              setDropoffLocation={setDropoffLocation}
              />
            </div>

            <div className="date-time-details">
              <div className="date-picker-sizing">
              <div className="trip-detail-container-labels">
              <h4>Pick-Up Date</h4>
              <RentalDatePicker
                type={"Pick-Up"}
                setPickupDate={setPickupDate}
                setDropoffDate={setDropoffDate}
                pickupDate={pickupDate}
                />
                </div>
                </div>
              {/* Fix center alignment on digits */}
              <div className="trip-detail-container-labels">
            <h4>Pick-Up Time</h4>
              <TimePicker onChange={(val) => {
                setPickupTime(val);
              }}/>
              </div>
            </div>

            <div className="date-time-details">
            <div className="date-picker-sizing">
            <div className="trip-detail-container-labels">
            <h4>Drop-off Date</h4>
              <RentalDatePicker
                type={"Drop-Off"}
                setPickupDate={setPickupDate}
                setDropoffDate={setDropoffDate}
                dropoffDate={dropoffDate}
                />
              </div>
                </div>
              {/* Fix center alignment on caret */}
              <div className="trip-detail-container-labels">
            <h4>Drop-off Time</h4>
              <TimePicker onChange={(val) => {
                setDropoffTime(val);
              }}/>
              </div>
            </div>

            <Link className={!formFilled ? "disabled-link" : ""} to="/logs">
              <Button
                disabled={!formFilled}
                className="submit-button"
                onClick={() => {
                  handleSubmit();
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
