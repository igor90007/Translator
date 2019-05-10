import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'

import { Button, FlatList, Text, TouchableOpacity, View } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

// Temporary
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
}
//

interface IProps {
  translate(): void
}

interface IItem {
  Language: string
  Code: string
}

const General: React.FC<IProps> = ({ translate = () => null }) => {
  const keyExtractor = (item: IItem) => item.Language

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <FlatList
          data={Settings.languages}
          keyExtractor={keyExtractor}
          renderItem={({ item }) => <Text style={styles.itemStyle}>{item.Language}</Text>}
          horizontal
        />
        <TouchableOpacity style={styles.languageShaker}>
          <Text>></Text>
          <Text>{`<`}</Text>
        </TouchableOpacity>
        <FlatList
          data={Settings.languages}
          keyExtractor={keyExtractor}
          renderItem={({ item }) => <Text style={styles.itemStyle}>{item.Language}</Text>}
          horizontal
        />
      </View>
      <Button onPress={translate} title="Translate" />
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
  itemStyle: {
    padding: wp('1%'),
  },
  languageShaker: {
    padding: wp('1%'),
  },
  row: {
    alignItems: 'center',
    borderBottomWidth: '$borderWidth',
    borderColor: '$grey',
    borderTopWidth: '$borderWidth',
    flexDirection: 'row',
    width: wp('100%'),
  },
  welcome: {
    margin: wp('2%'),
    textAlign: 'center',
  },
})

export default General
