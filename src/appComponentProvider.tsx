import NetInfo from '@react-native-community/netinfo'
import React from 'react'

import { ApolloProvider } from 'react-apollo'
import { ComponentProvider, Platform } from 'react-native'
import { NavigationContainer, NavigationContainerComponent } from 'react-navigation'

import { IApplication } from 'src/types'

import NavigatorService from 'src/api/Navigation/NavigationService'
import Settings from 'src/config/Settings'

const client = Settings.client

const checkConnectivity = () => {
  if (Platform.OS === 'android') {
    return NetInfo.isConnected.fetch().then((isConnected: boolean) => {
      return isConnected
    })
  }
  return NetInfo.isConnected.addEventListener('connectionChange', handleFirstConnectivityChange)
}
const handleFirstConnectivityChange = (isConnected: boolean) => {
  NetInfo.isConnected.removeEventListener('connectionChange', handleFirstConnectivityChange)
  return isConnected
}
setInterval(async () => {
  const connection = await checkConnectivity()
  client.writeData({ data: { offline: !connection } })
}, 999)

export function createAppComponentProvider(
  app: IApplication,
  NavContainer: NavigationContainer,
): ComponentProvider {
  return () => {
    return class AppContainer extends React.Component {
      render() {
        return (
          <ApolloProvider client={client}>
            <NavContainer ref={(ref) => this.setNavigatorRef(ref)} />
          </ApolloProvider>
        )
      }
      private setNavigatorRef(navigator: NavigationContainerComponent | null) {
        if (navigator) {
          app.setNavigator(navigator)
          NavigatorService.setTopLevelNavigator(navigator)
        }
      }
    }
  }
}
