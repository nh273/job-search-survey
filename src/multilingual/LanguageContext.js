import React, { Component } from "react";

export const LanguageContext = React.createContext();

export const LanguageConsumer = LanguageContext.Consumer;

class LanguageProvider extends Component {
  constructor(props) {
    super(props);
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  changeLanguage = (event, value) => {
    this.props.updateLanguage(value);
  };

  render() {
    return (
      <LanguageContext.Provider
        value={{
          language: this.props.currentLanguage,
          changeLanguage: this.changeLanguage
        }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

export default LanguageProvider;
