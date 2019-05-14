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
  languageSource = 'Welcome to React Native!',
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
    backgroundColor: '$background',
    flex: 1,
    justifyContent: 'center',
  },
  welcome: {
    fontSize: '$textDefault',
    margin: wp('2%'),
    textAlign: 'center',
  },
})
