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
          <Translatable text={{ en: "Hello World", vi: "Xin chào thế giới" }} />
          <LanguageSwitch />
          <Question
            text={{
              vi: "Em có thích ăn rau dền không?",
              en: "Do you like to eat Amaranthus tricolor?"
            }}
          />
        </div>
      </LanguageProvider>
    );
  }
}

export default App;
