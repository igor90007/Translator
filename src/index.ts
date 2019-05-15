import { AppRegistry } from 'react-native'
import { createAppContainer, NavigationContainerComponent } from 'react-navigation'

import { createAppComponentProvider } from 'src/appComponentProvider'

import Navigator from 'src/config/Routes'
import Settings from 'src/config/Settings'
import theme from 'src/config/Theme'

Settings.stores.General.checkConnection()

theme()

export default class Application {
  private static _instance: Application

  static get instance(): Application {
    if (!Application._instance) {
      Application._instance = new Application()
    }
    return Application._instance
  }

  private _navigator: NavigationContainerComponent | undefined

  get navigator(): NavigationContainerComponent {
    if (!this._navigator) throw new Error('Navigator still not set')
    return this._navigator
  }

  bootstrap() {
    const AppContainer = createAppContainer(Navigator)
    AppRegistry.registerComponent('AwesomeProject', createAppComponentProvider(this, AppContainer))
  }

  setNavigator(navigator: NavigationContainerComponent) {
    this._navigator = navigator
  }
}
