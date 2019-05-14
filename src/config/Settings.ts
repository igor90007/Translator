import stores from 'src/stores'

const Settings = {
  languages: [
    { Language: 'Detect Language', Code: '' },
    { Language: 'Arabic', Code: 'ar' },
    { Language: 'Chinese', Code: 'zh' },
    { Language: 'English', Code: 'en' },
    { Language: 'Farsi (Persian)', Code: 'fa' },
    { Language: 'French', Code: 'fr' },
    { Language: 'German', Code: 'de' },
    { Language: 'Hindi', Code: 'hi' },
    { Language: 'Japan', Code: 'ja' },
    { Language: 'Kazakh', Code: 'kk' },
    { Language: 'Korean', Code: 'ko' },
    { Language: 'Polish', Code: 'pl' },
    { Language: 'Portuguese', Code: 'pt' },
    { Language: 'Russian', Code: 'ru' },
    { Language: 'Spanish', Code: 'es' },
    { Language: 'Turkish', Code: 'tr' },
    { Language: 'Ukrainian', Code: 'uk' },
  ],
  stores: stores(),
}

export default Settings
