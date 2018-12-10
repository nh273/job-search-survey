import React, { Component } from "react";
import PropTypes from "prop-types";
import { Translatable } from "../multilingual/Translatable";

class Question extends Component {
  static propTypes = {
    text: PropTypes.object
  };

  renderChoices = key => {
    const choice_text_vi = this.props.choices[key];
    const choice_text_en = this.props.choices[key];
    return <button>{choice_text_vi}</button>;
  };

  render() {
    return (
      <div>
        <Translatable text={this.props.text} />
      </div>
    );
  }
}

export default Question;
