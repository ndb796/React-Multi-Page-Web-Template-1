import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      KOR: {
        translations: {
          "Home": "메인",
          "About": "소개",
          "Faq": "질의응답",
          "Notice": "공지사항"
        }
      },
      ENG: {
        translations: {
          "Home": "Home",
          "About": "About",
          "Faq": "Faq",
          "Notice": "Notice"
        }
      }
    },
    fallbackLng: "KOR",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
