import React, { Component } from "react";

export const LanguageContext = React.createContext();

export const LanguageConsumer = LanguageContext.Consumer;

class LanguageProvider extends Component {
  constructor(props) {
    super(props);

    let cachedLanguage = localStorage.getItem("language");
    if (cachedLanguage) {
      this.state = { language: cachedLanguage };
    } else {
      this.state = { language: "en" };
    }
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  changeLanguage = e => {
    let newLanguage = e.target.value;
    this.setState({ language: newLanguage });
    localStorage.setItem("language", newLanguage);
  };

  render() {
    return (
      <LanguageContext.Provider
        value={{
          language: this.state.language,
          changeLanguage: this.changeLanguage
        }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

export default LanguageProvider;
