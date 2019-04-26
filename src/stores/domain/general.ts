import { observable, action } from 'mobx'

import InputsModel from 'src/models/InputsModel'

interface Data {
  [key: string]: string
  languageSource: string
  languageTranslated: string
}

interface IMobxStore {
  [key: string]: any
  languageSource: string
  languageTranslated: string
}

class AuthStore {
  @observable offline = true

  @observable inputsData: IMobxStore = new InputsModel({
    languageSource: '',
    languageTranslated: '',
  })

  @action setConnection = (status: boolean) => {
    this.offline = status
  }

  @action setInputs = (data: Data) => {
    const keys = Object.keys(data)
    keys.forEach((key: string) => {
      this.inputsData[key] = data[key]
    })
  }
}

export default AuthStore
