import i18n from 'i18next';
import { initReactI18next } from 'react-i18next'
import strings from './values/strings.json'

i18n.use(initReactI18next).init({
    resources: {
        ru: { translation: strings.ru },
        en: { translation: strings.en }
    },
    lng: 'ru',
    fallbackLng: 'en',
})

export default i18n