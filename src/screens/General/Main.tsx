import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'

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
