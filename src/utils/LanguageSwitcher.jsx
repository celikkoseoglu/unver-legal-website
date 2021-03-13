import storage from "local-storage-fallback";

export const TURKISH = "tr";
export const ENGLISH = "en";

export const getLanguageFile = (fileName, language) => {
  return require(`../data/${language}/${fileName}.json`);
};

export const switchLanguage = (language) => {
  if (TURKISH === language) {
    return ENGLISH;
  }
  return TURKISH;
};

export const getInitialLanguage = () => {
  const initialLanguage = storage.getItem("language");

  if (initialLanguage === null) {
    return TURKISH;
  }

  return initialLanguage;
};
