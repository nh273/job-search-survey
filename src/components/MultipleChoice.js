import React, { Component } from "react";
import PropTypes from "prop-types";
import Translatable from "../multilingual/Translatable";

class MultipleChoice extends Component {
  static propTypes = {
    value: PropTypes.string,
    text: PropTypes.objectOf(PropTypes.string),
    handleChoice: PropTypes.func
  };

  render() {
    return (
      <button value={this.props.value} onClick={this.props.handleChoice}>
        <Translatable text={this.props.text} />
      </button>
    );
  }
}

export default MultipleChoice;
