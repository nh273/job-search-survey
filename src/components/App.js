import React, { Component } from "react";
import "../css/App.css";
import Question from "./Question";
import LanguageProvider from "../multilingual/LanguageContext";
import LanguageSwitch from "../multilingual/LanguageSwitch";
import { Translatable } from "../multilingual/Translatable";

class App extends Component {
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
        </div>
      </LanguageProvider>
    );
  }
}

export default App;
