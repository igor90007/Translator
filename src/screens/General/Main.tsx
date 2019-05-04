import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'

import { Text, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
class General extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native.</Text>
      </View>
    )
  }
}

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
})

export default General
