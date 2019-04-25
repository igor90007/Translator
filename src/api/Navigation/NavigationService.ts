import { NavigationActions } from 'react-navigation'

interface Dispatch {
  dispatch(param: object): void
}

interface Navigator {
  navigation: Dispatch
  setTopLevelNavigator(navigatorRef: Dispatch): void
  navigate(routeName: string, params: object): void
}

const navigator: Navigator = {
  navigation: { dispatch: () => null },
  setTopLevelNavigator: (navigatorRef) => {
    navigator.navigation = navigatorRef
  },
  navigate: (routeName, params) => {
    navigator.navigation.dispatch(
      NavigationActions.navigate({
        routeName,
        params,
      }),
    )
  },
}

export default navigator
