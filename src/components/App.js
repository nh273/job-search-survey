import React, { Component } from "react";
import "../css/App.css";
import Question from "./Question";
import LanguageProvider from "../LanguageContext";
import LanguageSwitch from "./LanguageSwitch";
import { Translatable } from "./Translatable";

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
              en: "Do you like to eat rau den?"
            }}
          />
        </div>
      </LanguageProvider>
    );
  }
}

export default App;
