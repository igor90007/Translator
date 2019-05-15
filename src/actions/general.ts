import { getAuthenticatedData } from 'src/api/Helpers/Others'

import Settings from 'src/config/Settings'

export const translateData = (from: string, to: string, text: string) =>
  getAuthenticatedData(
    `https://api.multillect.com/translate/json/1.0/${
      Settings.credentials.translatorApiKey
    }?method=translate/api/translate${from}&to=${to}&text=${text}&sig=${Settings.credentials.sig}`,
    'get',
  )
