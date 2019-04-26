import { observable } from 'mobx'

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

class InputsModel implements IMobxStore {
  @observable languageSource = ''

  @observable languageTranslated = ''

  constructor(obj: Data) {
    this.languageSource = obj.languageSource
    this.languageTranslated = obj.languageTranslated
  }
}

export default InputsModel
