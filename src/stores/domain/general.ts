import { action, observable } from 'mobx'

import { ILanguageData, InputsModel } from 'src/models/InputsModel'
<<<<<<< HEAD
=======

class GeneralStore {
  @observable offline = true

  @observable fromLanguageCode = ''
>>>>>>> a71d4e85148d4ef69072d6de4260558b9ebf6a64

  @observable toLanguageCode = 'uk'

<<<<<<< HEAD
  @observable fromLanguageCode = ''

  @observable toLanguageCode = 'uk'

=======
>>>>>>> a71d4e85148d4ef69072d6de4260558b9ebf6a64
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

export default GeneralStore
