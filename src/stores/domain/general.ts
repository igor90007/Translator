import NetInfo from '@react-native-community/netinfo'

import { action, observable } from 'mobx'
import { Platform } from 'react-native'

import { ILanguageData, InputsModel } from 'src/models/InputsModel'

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

class GeneralStore {
  @observable offline = true

  @observable fromLanguageCode = ''

  @observable toLanguageCode = 'uk'

  @observable inputsData: ILanguageData = new InputsModel({
    languageSource: '',
    languageTranslated: '',
  })

  @action checkConnection = () => {
    setInterval(async () => {
      const connection = await checkConnectivity()

      if (connection) {
        this.offline = false
      } else {
        this.offline = true
      }
    }, 999)
  }

  @action setInputs = (data: ILanguageData) => {
    const keys = Object.keys(data)
    keys.forEach((key: string) => {
      this.inputsData[key] = data[key]
    })
  }
}

export default GeneralStore
