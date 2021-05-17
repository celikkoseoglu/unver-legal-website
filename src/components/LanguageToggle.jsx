import React from "react";
import PropTypes from "prop-types";
import storage from "local-storage-fallback";
import { ENGLISH, switchLanguage, TURKISH } from "../utils/LanguageSwitcher";
import {
  languageToggle,
  languageMarker,
  firstLanguageMarker,
  secondLanguageMarker,
  firstLanguageMarkerDark,
  secondLanguageMarkerDark,
  darkLanguageToggle,
} from "../stylesheets/components/LanguageToggle.module.sass";

const onClickWrapper = (language) => {
  const newLanguage = switchLanguage(language);
  storage.setItem("language", newLanguage);
  return newLanguage;
};

const drawSelectedLanguageLine = (isDark, language) => {
  if (TURKISH === language) {
    return isDark ? firstLanguageMarkerDark : firstLanguageMarker;
  }
  if (ENGLISH === language) {
    return isDark ? secondLanguageMarkerDark : secondLanguageMarker;
  }
  return null;
};

const LanguageToggle = ({ text, className, language, languageSwitchFunction, isDark }) => (
  <button
    type="button"
    aria-label="Language Toggle"
    onClick={() => {
      languageSwitchFunction(onClickWrapper(language));
    }}
    className={`${languageToggle} ${languageMarker} ${drawSelectedLanguageLine(isDark, language)} ${
      isDark && darkLanguageToggle
    }`}
  >
    {text}
  </button>
);

LanguageToggle.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  language: PropTypes.string.isRequired,
  languageSwitchFunction: PropTypes.func.isRequired,
  isDark: PropTypes.bool,
};

LanguageToggle.defaultProps = {
  className: null,
  isDark: true,
};

export default LanguageToggle;
