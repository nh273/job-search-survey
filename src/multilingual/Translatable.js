import React, { Component } from "react";
import { LanguageConsumer } from "./LanguageContext";

class Translatable extends Component {
  render() {
    return (
      <LanguageConsumer>
        {({ language }) => this.props.text[language]}
      </LanguageConsumer>
    );
  }
}

export default Translatable;
