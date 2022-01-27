import React from "react";
import HertzLogo from "../assets/hertz-dark-logo.png";
import { Icon, Menu, MenuItem, MenuDivider, Button } from "@blueprintjs/core";
import { Popover2 } from "@blueprintjs/popover2";

const Topbar = () => {
  return (
    <div className="top-bar">
      <div>
        <img className="logo" src={HertzLogo} alt="hertz logo" />
      </div>
      <div className="menu-items">
        <Icon
          style={{ paddingRight: "15px", outline: "none" }}
          icon="user"
          size={20}
        />
        <Popover2
          content={
            <Menu>
              <MenuItem text="Custom SVG icon" />
              <MenuDivider />
              <MenuItem icon="new-text-box" text="New text box" />
              <MenuItem icon="new-object" text="New object" />
              <MenuItem icon="new-link" text="New link" />
            </Menu>
          }
        >
          <Button icon="grid-view" size={18} />
        </Popover2>
      </div>
    </div>
  );
};

export default Topbar;
