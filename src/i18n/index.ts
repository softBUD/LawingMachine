// import {setLanguage} from 'api/storageApi'
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import resources from "./locales";

type LanguageCode = "ko" | "en";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      order: ["querystring", "localStorage"],
      lookupQuerystring: "lang",
      lookupLocalStorage: "lang",
      caches: ["localstorage"],
    },
    resources,
    lng: "ko",
    fallbackLng: "ko",
    debug: false,
  })
  .then(() =>
    i18n.on("languageChanged", (lng) => {
      lng as LanguageCode;
    })
  );

export default i18n;
