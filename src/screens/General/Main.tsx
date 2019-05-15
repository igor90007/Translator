import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'

import { Button, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

import Settings from 'src/config/Settings'

export interface IProps {
  languageSource: string
  languageTranslated: string
  fromLanguageId: string
  toLanguageId: string
  chooseFromLanguage(param1: string, param2: string): void
  chooseToLanguage(param1: string, param2: string): void
  translate(param1: string, param2: string, param3: string): void
  shakeLanguages(param1: string, param2: string, param3: string, param4: string): void
  startVoiceRecognize(param: string): void
  stopVoiceRecognize(): void
  typeTextForTranslating(param: string): void
}

interface IItem {
  Language: string
  key: string
  Code: string
}

interface IItemProps {
  item: IItem
}

const General: React.FC<IProps> = ({
  translate = () => null,
  shakeLanguages = () => null,
  chooseFromLanguage = () => null,
  chooseToLanguage = () => null,
  startVoiceRecognize = () => null,
  stopVoiceRecognize = () => null,
  typeTextForTranslating = () => null,
  fromLanguageId = '0',
  toLanguageId = '16',
  languageSource = '',
  languageTranslated = '',
}) => {
  const renderFromItem: React.FC<IItemProps> = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => chooseFromLanguage(item.Code, item.key)}>
        <Text style={item.key === fromLanguageId ? styles.itemActiveStyle : styles.itemStyle}>
          {item.Language}
        </Text>
      </TouchableOpacity>
    )
  }

  const renderToItem: React.FC<IItemProps> = ({ item }) => {
    return item.key === '0' ? null : (
      <TouchableOpacity onPress={() => chooseToLanguage(item.Code, item.key)}>
        <Text style={item.key === toLanguageId ? styles.itemActiveStyle : styles.itemStyle}>
          {item.Language}
        </Text>
      </TouchableOpacity>
    )
  }

  const doShakeLanguages = () => {
    shakeLanguages(
      Settings.languages[Number(toLanguageId)].Code,
      Settings.languages[Number(fromLanguageId)].Code,
      Settings.languages[Number(toLanguageId)].key,
      Settings.languages[Number(fromLanguageId)].key,
    )
  }

  const startRecognize = () => {
    startVoiceRecognize(Settings.languages[Number(fromLanguageId)].Code)
  }

  const doTranslate = () => {
    translate(
      Settings.languages[Number(fromLanguageId)].Code,
      Settings.languages[Number(toLanguageId)].Code,
      languageSource,
    )
  }

  return (
    <View style={styles.container}>
      <Button onPress={startRecognize} title="Start recognize" />
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
        <TouchableOpacity style={styles.languageShaker} onPress={doShakeLanguages}>
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
      <Button onPress={stopVoiceRecognize} title="Stop recognize" />
      <View style={styles.rowInput}>
        <TextInput
          style={styles.input}
          maxLength={99}
          multiline={true}
          numberOfLines={2}
          onChangeText={typeTextForTranslating}
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
      <Button onPress={doTranslate} title="Translate" />
    </View>
  )
}

const styles = EStyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '$background',
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
})

export default General
