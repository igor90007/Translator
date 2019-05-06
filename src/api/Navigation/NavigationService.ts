import { NavigationActions } from 'react-navigation'

interface IDispatch {
  dispatch(param: object): void
}

interface INavigator {
  navigation: IDispatch
  setTopLevelNavigator(navigatorRef: IDispatch): void
  navigate(routeName: string, params: object): void
}

const navigator: INavigator = {
  navigate: (routeName, params) => {
    navigator.navigation.dispatch(
      NavigationActions.navigate({
        params,
        routeName,
      }),
    )
  },
  navigation: { dispatch: () => null },
  setTopLevelNavigator: (navigatorRef) => {
    navigator.navigation = navigatorRef
  },
}

export default navigator
