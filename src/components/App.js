import React, { Component } from "react";
import "../css/App.css";
import Question from "./Question";
import LanguageProvider from "../multilingual/LanguageContext";
import LanguageSwitch from "../multilingual/LanguageSwitch";
import Translatable from "../multilingual/Translatable";
import base from "./Firebase/Base";
import Login from "./Firebase/Login";
import MedianAppChart from "./Charts/MedianAppChart";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { uid: null, answers: {} };
  }

  componentDidMount() {
    console.log("mounting app");
    this.ref = base.syncState("survey_answers", {
      context: this,
      user: "uid",
      state: "answers"
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  updateAnswer = (questionId, answer) => {
    const answers = this.state.answers;
    answers[questionId] = answer;
    this.setState({ answers });
  };

  setUserState = newState => {
    this.setState({ uid: newState });
  };

  render() {
    return (
      <LanguageProvider>
        <div className="App">
          <Login setUserState={this.setUserState} />
          <LanguageSwitch />
          <div className="opening-text">
            <Translatable
              text={{
                en: (
                  <div className="opening-text-en">
                    Most of us have been there: struggling to customize the
                    hundredth cover letter, suppressing frustration and tears
                    while filling out interminable forms "What do you mean I
                    need to manually input my job experiences <i>again</i>???
                    Then what did I just submit my résumé for?". <br />
                    <br />
                    And then the burst of joy upon receiving an invitation to
                    interview, followed by dread (or for the lucky few, jaded
                    ennui) at the scheduling, the calling and/or travelling, the
                    awkward silence over the phone after a doozy of a question,
                    (or heaven forbids, the awkward silence in person). <br />
                    <br />
                    This is a space for you to share your job application
                    experience and see how it measured up against other people,
                    to commiserate or feel inspired, to know that you are not
                    alone in this job search journey.
                    <br />
                    We have collected data from 81 respondents about their job
                    search journey.
                  </div>
                ),
                vi: "Xin chào thế giới"
              }}
            />
          </div>
          <div className="chart-1">
            <MedianAppChart data={[1, 3, 4, 5]} size={[100, 100]} />
          </div>
          <div className="Questionaire">
            <Question
              id="Q1"
              updateAnswer={this.updateAnswer}
              text={{
                vi: "Em có thích ăn rau dền không?",
                en: "Do you currently have a full-time or internship offer?"
              }}
              choices={{
                Q1C1: {
                  value: "Q1, option 1",
                  text: {
                    vi: "Thích",
                    en: "Yes"
                  }
                },

                Q2C2: {
                  value: "Q1, option 2",
                  text: {
                    vi: "Không thích",
                    en: "No"
                  }
                }
              }}
            />
            <Question
              id="Q2"
              updateAnswer={this.updateAnswer}
              text={{
                vi: "Em có anh trai không?",
                en: "Do you have an older brother?"
              }}
              choices={{
                Q2C1: {
                  value: "Q2, option 1",
                  text: {
                    vi: "Có",
                    en: "Yes"
                  }
                },

                Q2C2: {
                  value: "Q2, option 2",
                  text: {
                    vi: "Không có",
                    en: "No"
                  }
                }
              }}
            />
          </div>
        </div>
      </LanguageProvider>
    );
  }
}

export default App;
