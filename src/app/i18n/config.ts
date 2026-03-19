import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

import * as enUS from './locales/en-us'
import * as esES from './locales/es-es'
import * as ptBR from './locales/pt-br'

import { Locale } from './config.contants'

export { exists, t } from 'i18next'

export const languages = [
  { value: Locale.esES, label: 'Español (España)' },
  { value: Locale.enUS, label: 'English (United States)' },
  { value: Locale.ptBR, label: 'Português (Brasil)' },
]

const resources = {
  [Locale.esES]: esES,
  [Locale.enUS]: enUS,
  [Locale.ptBR]: ptBR,
}

const options = {
  lng: Locale.enUS,
  resources,
  debug: false,
  interpolation: { escapeValue: false },
}

i18n.use(initReactI18next).init(options)

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(localizedFormat)
dayjs.locale(options.lng)

export const datetime = dayjs
