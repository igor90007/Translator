import { createSwitchNavigator, createStackNavigator } from 'react-navigation'

import AuthLoading from '../containers/General/AuthLoading'
import Main from '../containers/General/Main'

const AppStack = createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Main',
  },
)

const Navigator = createSwitchNavigator(
  {
    AuthLoading,
    App: AppStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
)

export default Navigator
