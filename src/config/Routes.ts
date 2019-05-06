import { createStackNavigator, createSwitchNavigator } from 'react-navigation'

import AuthLoading from 'src/containers/General/AuthLoading'
import Main from 'src/containers/General/Main'

const AppStack = createStackNavigator(
  {
    Main: {
      navigationOptions: {
        header: null,
      },
      screen: Main,
    },
  },
  {
    initialRouteName: 'Main',
  },
)

const Navigator = createSwitchNavigator(
  {
    App: AppStack,
    AuthLoading,
  },
  {
    initialRouteName: 'AuthLoading',
  },
)

export default Navigator
