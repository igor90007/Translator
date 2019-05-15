import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'

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

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <FlatList
          data={Settings.languages}
          renderItem={renderFromItem}
          horizontal
          initialScrollIndex={Number(fromLanguageId)}
          getItemLayout={(data, index) => ({
            index,
            length: wp('13%'),
            offset: index * wp('13%'),
          })}
        />
        <TouchableOpacity style={styles.languageShaker} onPress={shakeLanguages}>
          <Text>{`>`}</Text>
          <Text>{`<`}</Text>
        </TouchableOpacity>
        <FlatList
          data={Settings.languages}
          renderItem={renderToItem}
          horizontal
          initialScrollIndex={Number(toLanguageId)}
          getItemLayout={(data, index) => ({
            index,
            length: wp('13%'),
            offset: index * wp('13%'),
          })}
        />
      </View>
      <View style={styles.rowInput}>
        <TextInput
          style={styles.input}
          maxLength={99}
          multiline={true}
          numberOfLines={2}
          onChangeText={(text) => (languageSource = text)}
          value={languageSource}
        />
        <TextInput
          style={styles.input}
          editable={false}
          multiline={true}
          numberOfLines={2}
          value={languageTranslated}
        />
      </View>
      <Button onPress={translate} title="Translate" />
    </View>
  )
}

const styles = EStyleSheet.create({
  container: {
    alignItems: 'center',
<<<<<<< HEAD
    backgroundColor: '$background',
    flex: 1,
    justifyContent: 'center',
  },
  instructions: {
    color: '$textColor',
    marginBottom: wp('1%'),
    textAlign: 'center',
  },
  welcome: {
    fontSize: '$textDefault',
=======
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
>>>>>>> 7c9b58e8564659961b2f74b3226571bdffb575a4
    margin: wp('2%'),
    textAlign: 'center',
  },
})

export default General
