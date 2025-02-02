import { getLocales } from 'expo-localization'
import { I18n } from 'i18n-js'
import en from './en'
import zh from './zh'
const i18n = new I18n({
  zh: zh,
  en: en
})

i18n.locale = getLocales()[0].languageCode ?? 'en'
i18n.enableFallback = true
i18n.defaultLocale = 'en'
export default i18n;
