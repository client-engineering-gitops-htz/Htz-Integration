import React from "react";
import HertzLogo from "../assets/hertz-dark-logo.png";
import { Icon, Menu, MenuItem, MenuDivider, Button } from "@blueprintjs/core";
import { Popover2 } from "@blueprintjs/popover2";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="top-bar">
      <Link to="/">
        <div>
          <img className="logo" src={HertzLogo} alt="hertz logo" />
        </div>
      </Link>
      <div className="menu-items">
        <Icon
          style={{
            paddingRight: "15px",
            outline: "none",
            // paddingTop: "6px",
            color: "#5c7080",
          }}
          icon="help"
          size={18}
        />
        <Popover2
          content={
            <Menu>
              <Link to="/">
                <MenuItem icon="dollar" text="Book a Trip" />
              </Link>
              <MenuDivider />
              <Link to="/landing">
                <MenuItem icon="dashboard" text="Results Dashboard" />
              </Link>
              <MenuDivider />
              <Link to="/logs">
                <MenuItem icon="comparison" text="Seamless Conversion Logs" />
              </Link>
              <MenuDivider />
              <Link to="/analytics">
                <MenuItem icon="chart" text="Data Analytics Dashboard" />
              </Link>
            </Menu>
          }
        >
          <Button
            className="menu-button"
            icon="grid-view"
            size={18}
            minimal={true}
          />
        </Popover2>
      </div>
    </div>
  );
};

export default Topbar;
