import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'

<<<<<<< HEAD
import { Button, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

// Temporary
const Settings = {
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
//

interface IProps {
  languageSource: string
  languageTranslated: string
  fromLanguageId: string
  toLanguageId: string
  chooseFromLanguage(param: string): void
  chooseToLanguage(param: string): void
  translate(): void
  shakeLanguages(): void
}

interface IItem {
  Language: string
  Code: string
  key: string
}

interface IItemProps {
  item: IItem
}

const General: React.FC<IProps> = ({
  translate = () => null,
  shakeLanguages = () => null,
  chooseFromLanguage = () => null,
  chooseToLanguage = () => null,
  fromLanguageId = '0',
  toLanguageId = '16',
  languageSource = '',
  languageTranslated = '',
}) => {
  const renderFromItem: React.FC<IItemProps> = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => chooseFromLanguage(item.key)}>
        <Text style={item.key === fromLanguageId ? styles.itemActiveStyle : styles.itemStyle}>
          {item.Language}
        </Text>
      </TouchableOpacity>
    )
  }

  const renderToItem: React.FC<IItemProps> = ({ item }) => {
    return item.key === '0' ? null : (
      <TouchableOpacity onPress={() => chooseToLanguage(item.key)}>
        <Text style={item.key === toLanguageId ? styles.itemActiveStyle : styles.itemStyle}>
          {item.Language}
        </Text>
      </TouchableOpacity>
    )
  }
=======
import { Button, Text, View } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

export interface IProps {
  languageSource: string
  startVoiceRecognize(): void
  stopVoiceRecognize(): void
}

const General: React.FC<IProps> = ({
  startVoiceRecognize = () => null,
  stopVoiceRecognize = () => null,
  languageSource = '',
}) => {
  return (
    <View style={styles.container}>
      <Button onPress={startVoiceRecognize} title="Start recognize" />
      <Text style={styles.welcome}>{languageSource}</Text>
      <Button onPress={stopVoiceRecognize} title="Stop recognize" />
    </View>
  )
}
>>>>>>> 0020c6b014cf26850f0fb945ff10a24d436cf6d9

export default General

const styles = EStyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '$background',
    borderColor: '$grey',
    borderWidth: '$borderWidth / 4',
    flex: 0.5,
  },
  itemActiveStyle: {
    color: '$textColor',
    padding: wp('1%'),
  },
  itemStyle: {
    padding: wp('1%'),
  },
  languageShaker: {
    backgroundColor: '$background',
    padding: wp('2%'),
  },
  row: {
    alignItems: 'center',
    borderBottomWidth: '$borderWidth',
    borderColor: '$grey',
    borderTopWidth: '$borderWidth',
    flexDirection: 'row',
    width: wp('100%'),
  },
  rowInput: {
    alignItems: 'center',
    borderBottomWidth: '$borderWidth',
    borderColor: '$grey',
    borderTopWidth: '$borderWidth',
    flexDirection: 'row',
    marginBottom: wp('3%'),
    width: wp('100%'),
  },
  welcome: {
    margin: wp('2%'),
    textAlign: 'center',
  },
})
