import NetInfo from '@react-native-community/netinfo'

import { action, observable } from 'mobx'
import { Platform } from 'react-native'

import { ILanguageData, InputsModel } from 'src/models/InputsModel'

const checkConnectivity = () => {
  if (Platform.OS === 'android') {
    return NetInfo.isConnected.fetch().then((isConnected: boolean) => {
       return isConnected
    })
  if (Platform.OS === 'android') {
    return NetInfo.isConnected.fetch().then((isConnected) => {
      return NetInfo.isConnected.addEventListener('connectionChange', handleFirstConnectivityChange)
    }
  }
}
  

const handleFirstConnectivityChange = (isConnected: boolean) => {
  NetInfo.isConnected.removeEventListener('connectionChange', handleFirstConnectivityChange)

  return isConnected
}

class GeneralStore {
  @observable offline = true

  @observable fromLanguageCode = ''

  @observable toLanguageCode = 'uk'

  @observable fromLanguageId = '0'

  @observable toLanguageId = '16'

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

  @action shakeLanguages = (
    fromLanguageCode: string,
    toLanguageCode: string,
    fromLanguageId: string,
    toLanguageId: string,
  ) => {
    this.fromLanguageCode = fromLanguageCode
    this.toLanguageCode = toLanguageCode
    this.fromLanguageId = fromLanguageId
    this.toLanguageId = toLanguageId === '0' ? '1' : toLanguageId
  }

  @action setFromLanguageCode = (fromLanguageCode: string, fromLanguageId: string) => {
    this.fromLanguageCode = fromLanguageCode
    this.fromLanguageId = fromLanguageId
  }

  @action setToLanguageCode = (toLanguageCode: string, toLanguageId: string) => {
    this.toLanguageCode = toLanguageCode
    this.toLanguageId = toLanguageId
  }
}

export default GeneralStore
