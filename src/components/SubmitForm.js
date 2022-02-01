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

const SubmitForm = () => {
  const [pickupLocation, setPickupLocation] = useState();
  const [pickupDate, setPickupDate] = useState();
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
        PuLocation: parseInt(pickupLocation),
      },
      PuDate: pickupDateFormatted,
      PuTime: pickupTime.toLocaleTimeString("en-GB"),
      DoIsoLocationCode: {
        DoLocation: parseInt(dropoffLocation),
      },
      DoDate: dropoffDateFormatted,
      DoTime: dropoffTime.toLocaleTimeString("en-GB"),
    };

    console.log(input);
  };

  // "UI-Input": {
  //   "type": "object",
  //   "properties": {
  //     "SessionCheckID": {
  //       "type": "string"
  //     },
  //     "Brand": {
  //       "type": "string"
  //     },
  //     "PuIsoLocationCode": {
  //       "type": "object",
  //       "properties": {
  //         "PuCountry": {
  //           "type": "string"
  //         },
  //         "PuStateProvince": {
  //           "type": "string"
  //         },
  //         "PuGdsCity": {
  //           "type": "string"
  //         },
  //         "PuLocation": {
  //           "type": "integer"
  //         }
  //       }
  //     },
  //     "PuDate": {
  //       "type": "string"
  //     },
  //     "PuTime": {
  //       "type": "string"
  //     },
  //     "DoIsoLocationCode": {
  //       "type": "object",
  //       "properties": {
  //         "DoCountry": {
  //           "type": "string"
  //         },
  //         "DoStateProvince": {
  //           "type": "string"
  //         },
  //         "DoGdsCity": {
  //           "type": "string"
  //         },
  //         "DoLocation": {
  //           "type": "integer"
  //         }
  //       }
  //     },
  //     "DoDate": {
  //       "type": "string"
  //     },
  //     "DoTime": {
  //       "type": "string"
  //     }
  //   }
  // }

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
              <TimePicker
                onChange={(val) => {
                  setPickupTime(val);
                }}
              />
            </div>

            <div className="date-time-details">
              <RentalDatePicker
                type={"Drop-Off"}
                setPickupDate={setPickupDate}
                setDropoffDate={setDropoffDate}
                dropoffDate={dropoffDate}
              />
              <TimePicker
                onChange={(val) => {
                  setDropoffTime(val);
                }}
              />
            </div>

            {/* !formFilled ? "disabled-link" : "" */}
            <Link to="/landing">
              <Button
                // disabled={!formFilled}
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
