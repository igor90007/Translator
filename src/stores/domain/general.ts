import { observable, action } from 'mobx'

import { InputsModel, IMobxStore } from 'src/models/InputsModel'

class AuthStore {
  @observable offline = true

  @observable inputsData: IMobxStore = new InputsModel({
    languageSource: '',
    languageTranslated: '',
  })

  @action setConnection = (status: boolean) => {
    this.offline = status
  }

  @action setInputs = (data: IMobxStore) => {
    const keys = Object.keys(data)
    keys.forEach((key: string) => {
      this.inputsData[key] = data[key]
    })
  }
}

export default AuthStore
