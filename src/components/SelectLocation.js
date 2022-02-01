import * as React from "react";
import { Button, MenuItem, H5 } from "@blueprintjs/core";
import { Select } from "@blueprintjs/select";
import * as Locations from "./locations";

const LocationSelect = Select.ofType();

class SelectLocation extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      location: Locations.importedUSLocations[0]
    };
  }
  render() {
    const buttonText = this.state.location.LOC_NM || `Selection Location`;
    return (
      <div>
        {this.props.label && <H5>{this.props.label}</H5>}
        <LocationSelect
          fill
          items={Locations.importedUSLocations}
          itemPredicate={Locations.filterLocation}
          itemRenderer={Locations.renderLocation}
          noResults={<MenuItem disabled={true} text="No results." />}
          onItemSelect={this.handleValueChange}
        >
          <Button
            intent={this.props.intent}
            text={buttonText}
            rightIcon="caret-down"
          />
        </LocationSelect>
      </div>
    );
  }

  handleValueChange = location => {
    console.log(location);
    this.setState({ location: location });
    if (this.props.setLocation) {
      this.props.setLocation(location.OAG_CODE);
    }
    console.log(` State is now ${this.props.location}`)
  };
}

export default SelectLocation;
