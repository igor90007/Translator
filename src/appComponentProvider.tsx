import NetInfo from '@react-native-community/netinfo'
import ApolloClient from 'apollo-boost'
import React from 'react'

import { gql } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { ComponentProvider, Platform } from 'react-native'
import { NavigationContainer, NavigationContainerComponent } from 'react-navigation'

import { InputsModel } from 'src/models/InputsModel'
import { IApplication } from 'src/types'

import NavigatorService from 'src/api/Navigation/NavigationService'

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

const client = new ApolloClient({
  resolvers: {
    Mutation: {
      checkConnection: (_, __, { cache }) => {
        setInterval(async () => {
          const connection = await checkConnectivity()

          cache.writeData({ data: { __typename: 'GeneralStore', offline: !connection } })
        }, 999)
      },
      setFromLanguageCode: (_, { fromLanguageCode, fromLanguageId }, { cache }) => {
        cache.writeData({ data: { __typename: 'GeneralStore', fromLanguageCode, fromLanguageId } })
      },
      setInputs: (_, data, { cache }) => {
        const keys = Object.keys(data)
        const inputsData = gql(`
          query getInputsData {
            inputsData @client {
              data
            }
          }
        `)
        console.log(inputsData, 'inputsData')
        // keys.forEach((key: string) => {
        //   cache.writeData({
        //     data: { __typename: 'GeneralStore', inputsData: { ...inputsData, [key]: data[key] } },
        //   })
        // })
      },
      setToLanguageCode: (_, { toLanguageCode, toLanguageId }, { cache }) => {
        cache.writeData({ data: { __typename: 'GeneralStore', toLanguageCode, toLanguageId } })
      },
      shakeLanguages: (_, { fromLanguageCode, toLanguageCode, fromLanguageId, toLanguageId }, { cache }) => {
        cache.writeData({
          data: {
            __typename: 'GeneralStore',
            fromLanguageCode,
            fromLanguageId,
            toLanguageCode,
            toLanguageId: toLanguageId === '0' ? '1' : toLanguageId,
          },
        })
      },
    },
    Query: {
      fromLanguageCode: () => ({ __typename: 'GeneralStore', data: '' }),
      fromLanguageId: () => ({ __typename: 'GeneralStore', data: '0' }),
      inputsData: () => ({
        __typename: 'GeneralStore',
        data: new InputsModel({
          languageSource: '',
          languageTranslated: '',
        }),
      }),
      offline: () => ({ __typename: 'GeneralStore', data: true }),
      toLanguageCode: () => ({ __typename: 'GeneralStore', data: 'uk' }),
      toLanguageId: () => ({ __typename: 'GeneralStore', data: '16' }),
    },
  },
})

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
