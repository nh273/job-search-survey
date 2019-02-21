import React, { Component } from "react";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { LanguageConsumer } from "./LanguageContext";

class LanguageSwitch extends Component {
  render() {
    return (
      <LanguageConsumer>
        {({ changeLanguage, language }) => (
          <ToggleButtonGroup
            onChange={changeLanguage}
            exclusive={true}
            value={language}
          >
            <ToggleButton value="en">EN</ToggleButton>
            <ToggleButton value="vi">VI</ToggleButton>
          </ToggleButtonGroup>
        )}
      </LanguageConsumer>
    );
  }
}

export default LanguageSwitch;
