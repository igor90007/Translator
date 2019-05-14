import { action, observable } from 'mobx'

import { ILanguageData, InputsModel } from 'src/models/InputsModel'

class AuthStore {
  @observable offline = true

  @observable fromLanguageCode = ''

  @observable toLanguageCode = 'uk'

  @observable inputsData: ILanguageData = new InputsModel({
    languageSource: '',
    languageTranslated: '',
  })

  @action setConnection = (status: boolean) => {
    this.offline = status
  }

  @action setInputs = (data: ILanguageData) => {
    const keys = Object.keys(data)
    keys.forEach((key: string) => {
      this.inputsData[key] = data[key]
    })
  }
}

export default AuthStore
