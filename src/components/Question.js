import React, { Component } from "react";
import PropTypes from "prop-types";
import Translatable from "../multilingual/Translatable";
import MultipleChoice from "./MultipleChoice";

class Question extends Component {
  static propTypes = {
    id: PropTypes.string,
    text: PropTypes.object,
    choices: PropTypes.object,
    updateAnswer: PropTypes.func
  };

  handleChoice = e => {
    this.props.updateAnswer(this.props.id, e.target.value);
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
