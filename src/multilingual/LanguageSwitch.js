import React, { Component } from "react";
import { LanguageConsumer } from "./LanguageContext";

class LanguageSwitch extends Component {
  render() {
    return (
      <LanguageConsumer>
        {({ changeLanguage }) => (
          <select onChange={changeLanguage}>
            <option value="en">en</option>
            <option value="vi">vi</option>
          </select>
        )}
      </LanguageConsumer>
    );
  }
}

export default LanguageSwitch;
