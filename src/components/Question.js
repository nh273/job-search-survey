import React, { Component } from "react";
import PropTypes from "prop-types";
import { Translatable } from "../multilingual/Translatable";
import MultipleChoice from "./MultipleChoice";

class Question extends Component {
  static propTypes = {
    text: PropTypes.object,
    choices: PropTypes.object
  };

  handleChoice = e => {
    console.log(e.target.value);
  };

  render() {
    let choices = this.props.choices;
    return (
      <div>
        <Translatable text={this.props.text} />
        {Object.keys(choices).map(key => (
          <MultipleChoice
            key={key}
            value={choices[key].value}
            text={choices[key].text}
            handleChoice={this.handleChoice}
          />
        ))}
      </div>
    );
  }
}

export default Question;
