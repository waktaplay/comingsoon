import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import koTrans from "../trans/ko.json";
import enTrans from "../trans/en.json";
import jaTrans from "../trans/ja.json";
import viTrans from "../trans/vi.json";

i18n.use(initReactI18next).init({
  resources: {
    ko: { translation: koTrans },
    en: { translation: enTrans },
    ja: { translation: jaTrans },
    vi: { translation: viTrans },
  },
  debug: true,
  lng: "ko",
  fallbackLng: "en",
});
