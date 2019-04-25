import { createSwitchNavigator, createStackNavigator } from 'react-navigation'

import AuthLoading from 'src/containers/General/AuthLoading'
import Main from 'src/containers/General/Main'

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
