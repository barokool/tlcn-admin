import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLanguage } from './utils/localStorage';
import en from './locales/en/index';
import ko from './locales/ko/index';

const resources = {
  en: {
    translation: en,
  },
  ko: {
    translation: ko,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: getLanguage(),
  debug: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
