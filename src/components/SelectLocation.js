import React, { useState } from "react";
import { Button, MenuItem, H5 } from "@blueprintjs/core";
import { Select } from "@blueprintjs/select";
import * as Locations from "./utils/locations";

const LocationSelect = Select.ofType();

const SelectLocation = ({
  label,
  type,
  setDropoffLocation,
  setPickupLocation,
  intent,
}) => {
  const [location, setLocation] = useState(Locations.importedUSLocations[0]);

  const handleValueChange = (location) => {
    setLocation(location);

    if (type === "Drop-Off") {
      setDropoffLocation(location);
    }
    if (type === "Pick-Up") {
      setPickupLocation(location);
    }
  };

  const buttonText = location.CTY_NM || `Selection Location`;
  return (
    <div>
      {label && <H5>{label}</H5>}
      <LocationSelect
        fill
        items={Locations.importedUSLocations}
        itemPredicate={Locations.filterLocation}
        itemRenderer={Locations.renderLocation}
        noResults={<MenuItem disabled={true} text="No results." />}
        onItemSelect={handleValueChange}
      >
        <Button intent={intent} text={buttonText} rightIcon="caret-down" />
      </LocationSelect>
    </div>
  );
};

export default SelectLocation;
