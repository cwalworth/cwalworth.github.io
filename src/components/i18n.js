import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import XHR from 'i18next-xhr-backend'

import en from '../locales/en/translation.json'
import carousel_en from '../locales/en/carousel.json'
import navigation_en from '../locales/en/navigation.json'
import jp from '../locales/jp/translation.json'
import carousel_jp from '../locales/jp/carousel.json'
import navigation_jp from '../locales/jp/navigation.json'

export const langs = [
  { int: 'English', lang: 'en' },
  { int: 'Japanese', lang: 'jp' }
]

i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    debug: true,
    lng: 'en',
    fallBackLng: 'en',
    keySeparator: false,
    interpolation: {
      escapeValue: false
    },
    resources: {
      en: {
        translations: en,
        carousel: carousel_en,
        navigation: navigation_en
      },
      jp: {
        translations: jp,
        carousel: carousel_jp,
        navigation: navigation_jp
      }
    },
    ns: ['translations'],
    defaultNS: 'translations'
  })

export default i18n
