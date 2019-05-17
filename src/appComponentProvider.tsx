import React from 'react'

import { Provider } from 'mobx-react/native'
import { ComponentProvider } from 'react-native'
import { NavigationContainer, NavigationContainerComponent } from 'react-navigation'

import { IApplication } from 'src/types'

import NavigatorService from 'src/api/Navigation/NavigationService'
import Settings from 'src/config/Settings'

export function createAppComponentProvider(
  app: IApplication,
  NavContainer: NavigationContainer,
): ComponentProvider {
  return () => {
    return class AppContainer extends React.Component {
      render() {
        return (
          <Provider {...Settings.stores}>
            <NavContainer ref={(ref) => this.setNavigatorRef(ref)} />
          </Provider>
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
