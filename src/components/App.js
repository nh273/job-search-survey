import React, { Component } from "react";
import "../css/App.css";
import Question from "./Question";
import LanguageProvider from "../multilingual/LanguageContext";
import LanguageSwitch from "../multilingual/LanguageSwitch";
import { Translatable } from "../multilingual/Translatable";
import base from './Base';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { answers: {} };
  }

  componentDidMount(){
    this.ref = base.syncState('survey_answers',{
      context: this,
      state: 'answers'
    });
  }

  componentWillUnmount(){
    base.removeBinding(this.ref);
  }

  updateAnswer = (questionId, answer) => {
    const answers = this.state.answers;
    answers[questionId] = answer;
    this.setState({ answers });
  };

  render() {
    return (
      <LanguageProvider>
        <div className="App">
          <Translatable
            text={{
              en: "Hello World",
              vi: "Xin chào thế giới",
              fr: "Bonjour Le Monde"
            }}
          />
          <LanguageSwitch />
          <Question
            id="Q1"
            updateAnswer={this.updateAnswer}
            text={{
              vi: "Em có thích ăn rau dền không?",
              en: "Do you like to eat Amaranthus tricolor?",
              fr: "Veux-tu manger du Amaranthus tricolor?"
            }}
            choices={{
              Q1C1: {
                value: "Q1, option 1",
                text: {
                  vi: "Thích",
                  en: "Yes",
                  fr: "Oui"
                }
              },

              Q2C2: {
                value: "Q1, option 2",
                text: {
                  vi: "Không thích",
                  en: "No",
                  fr: "Non"
                }
              }
            }}
          />

          <Question
            id="Q2"
            updateAnswer={this.updateAnswer}
            text={{
              vi: "Em có anh trai không?",
              en: "Do you have an older brother?",
              fr: "As-tu un grand frere?"
            }}
            choices={{
              Q2C1: {
                value: "Q2, option 1",
                text: {
                  vi: "Có",
                  en: "Yes",
                  fr: "Oui"
                }
              },

              Q2C2: {
                value: "Q2, option 2",
                text: {
                  vi: "Không có",
                  en: "No",
                  fr: "Non"
                }
              }
            }}
          />
        </div>
      </LanguageProvider>
    );
  }
}

export default App;
