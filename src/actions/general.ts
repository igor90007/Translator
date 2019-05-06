import { getAuthenticatedData } from 'src/api/Helpers/Others'

import Settings from 'src/config/Settings'

export const translateData = (from: string, to: string, text: string) => {
  return getAuthenticatedData(
    `https://translation.googleapis.com/language/translate/v2?key=${
      Settings.credentials.googleTranslationKey
    }&format=text&source=${from}&target=${to}&q=${encodeURIComponent(text)}`,
    'post',
  )
}
