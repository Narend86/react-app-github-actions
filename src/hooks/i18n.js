import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome_message: "Welcome"
    }
  },
  ar: {
    translation: {
      welcome_message: "مرحبا"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en"
  });

  export default i18n;