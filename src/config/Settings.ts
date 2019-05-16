import ApolloClient from 'apollo-boost'

import credentialsData from 'src/credentials.json'

const Settings = {
  client: new ApolloClient({
    resolvers: {
      Query: {
        fromLanguageCode: () => '',
        fromLanguageId: () => '0',
        languageSource: () => '',
        languageTranslated: () => '',
        offline: () => true,
        toLanguageCode: () => 'uk',
        toLanguageId: () => '16',
      },
    },
  }),
  credentials: credentialsData,
  languages: [
    { Language: 'Detect Language', Code: '', key: '0' },
    { Language: 'Arabic', Code: 'ar', key: '1' },
    { Language: 'Chinese', Code: 'zh', key: '2' },
    { Language: 'English', Code: 'en', key: '3' },
    { Language: 'Farsi (Persian)', Code: 'fa', key: '4' },
    { Language: 'French', Code: 'fr', key: '5' },
    { Language: 'German', Code: 'de', key: '6' },
    { Language: 'Hindi', Code: 'hi', key: '7' },
    { Language: 'Japan', Code: 'ja', key: '8' },
    { Language: 'Kazakh', Code: 'kk', key: '9' },
    { Language: 'Korean', Code: 'ko', key: '10' },
    { Language: 'Polish', Code: 'pl', key: '11' },
    { Language: 'Portuguese', Code: 'pt', key: '12' },
    { Language: 'Russian', Code: 'ru', key: '13' },
    { Language: 'Spanish', Code: 'es', key: '14' },
    { Language: 'Turkish', Code: 'tr', key: '15' },
    { Language: 'Ukrainian', Code: 'uk', key: '16' },
  ],
}

export default Settings
