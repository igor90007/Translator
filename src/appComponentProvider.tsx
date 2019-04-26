import React from 'react'

import { ComponentProvider } from 'react-native'
import { NavigationContainer, NavigationContainerComponent } from 'react-navigation'

import { IApplication } from './types'

import NavigatorService from './api/Navigation/NavigationService'

export function createAppComponentProvider(
  app: IApplication,
  NavContainer: NavigationContainer,
): ComponentProvider {
  return () => {
    return class AppContainer extends React.Component {
      render() {
        return <NavContainer ref={(ref) => this.setNavigatorRef(ref)} />
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
