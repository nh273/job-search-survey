import React from "react";
import { LanguageConsumer } from "./LanguageContext";

export const Translatable = props => (
  <LanguageConsumer>{({ language }) => props.text[language]}</LanguageConsumer>
);
