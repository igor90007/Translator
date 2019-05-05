import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'

import { View } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

import { DefaultText } from '../../components/Text'
class General extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <DefaultText additionalStyles={styles.welcome}>Welcome to React Native</DefaultText>
      </View>
    )
  }
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
