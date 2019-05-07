import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'

import { Button, View } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

import { DefaultText } from 'src/components/Text'

interface IProps {
  translate(): void
}

const General: React.FC<IProps> = ({ translate }) => {
  return (
    <View style={styles.container}>
      <DefaultText additionalStyles={styles.welcome}>Welcome to React Native.</DefaultText>
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
  welcome: {
    margin: wp('2%'),
    textAlign: 'center',
  },
})

export default General
