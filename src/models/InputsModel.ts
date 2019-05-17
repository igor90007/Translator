import { observable } from 'mobx'

export interface ILanguageData {
  [key: string]: any
  languageSource: string
  languageTranslated: string
}

export class InputsModel implements ILanguageData {
  @observable languageSource = ''

  @observable languageTranslated = ''

  constructor(obj: ILanguageData) {
    this.languageSource = obj.languageSource
    this.languageTranslated = obj.languageTranslated
  }
}
