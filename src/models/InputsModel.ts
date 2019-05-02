import { observable } from 'mobx'

export interface IMobxStore {
  [key: string]: any
  languageSource: string
  languageTranslated: string
}

export class InputsModel implements IMobxStore {
  @observable languageSource = ''

  @observable languageTranslated = ''

  constructor(obj: IMobxStore) {
    this.languageSource = obj.languageSource
    this.languageTranslated = obj.languageTranslated
  }
}
