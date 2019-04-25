import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'

import { Text, View } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

class General extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
      </View>
    )
  }
}

export default General

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$background',
  },
  welcome: {
    fontSize: '$textDefault',
    textAlign: 'center',
    margin: wp('2%'),
  },
  instructions: {
    textAlign: 'center',
    color: '$textColor',
    marginBottom: wp('1%'),
  },
})
