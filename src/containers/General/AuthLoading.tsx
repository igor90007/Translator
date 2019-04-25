import React from 'react'

import { ActivityIndicator } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'

class AuthLoading extends React.Component<NavigationScreenProps> {
  componentDidMount() {
    const { navigation } = this.props

    navigation.navigate('App')
  }

  render() {
    return (
      <>
        <ActivityIndicator />
      </>
    )
  }
}

export default AuthLoading
