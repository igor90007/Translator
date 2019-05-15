import React from 'react'
import Voice from 'react-native-voice'

import { inject, observer } from 'mobx-react'

import Screen from 'src/screens/General/Main'

import { translateData } from 'src/actions/general'

export interface IProps {
  General: {
    inputsData: { languageSource: string; languageTranslated: string }
    setInputs(data: object): void
    shakeLanguages(param1: string, param2: string): void
    setFromLanguageCode(param: string): void
    setToLanguageCode(param: string): void
  }
}

export interface ISpeechResults {
  [key: string]: any
}
@inject('General')
@observer
export default class MainContainer extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props)
    Voice.onSpeechResults = this.onSpeechResultsHandler.bind(this)
  }

  componentWillUnmount() {
    Voice.destroy().then(Voice.removeAllListeners)
  }

  render() {
    const { General } = this.props

    return (
      <Screen
        languageSource={General ? General.inputsData.languageSource : ''}
        languageTranslated={General ? General.inputsData.languageTranslated : ''}
        startVoiceRecognize={this.startVoiceRecognize}
        stopVoiceRecognize={this.stopVoiceRecognize}
        typeTextForTranslating={this.typeTextForTranslating}
        shakeLanguages={this.shakeLanguages}
        chooseFromLanguage={this.chooseFromLanguage}
        chooseToLanguage={this.chooseToLanguage}
        translate={this.translate}
        fromLanguageId={General ? General.inputsData.languageSource : '0'}
        toLanguageId={General ? General.inputsData.languageSource : '16'}
      />
    )
  }

  private chooseFromLanguage(from: string) {
    const { General } = this.props

    General.setFromLanguageCode(from)
  }

  private chooseToLanguage(to: string) {
    const { General } = this.props

    General.setToLanguageCode(to)
  }

  private async translate(from: string, to: string, text: string) {
    const result = await translateData(from, to, text)
    console.log(result, 'result')
  }

  private shakeLanguages(fromLanguageCode: string, toLanguageCode: string) {
    const { General } = this.props

    General.shakeLanguages(fromLanguageCode, toLanguageCode)
  }

  private startVoiceRecognize(fromLanguageCode: string) {
    try {
      Voice.start(fromLanguageCode) // en-US
    } catch (e) {
      console.log(e, 'startVoiceRecognizeError')
    }
  }

  private stopVoiceRecognize() {
    try {
      Voice.stop()
    } catch (e) {
      console.log(e, 'stopVoiceRecognizeError')
    }
  }

  private onSpeechResultsHandler = (event: ISpeechResults) => {
    const { General } = this.props

    General.setInputs({ languageSource: event.value[event.value.length - 1] })
  }

  private typeTextForTranslating = (languageSource: string) => {
    const { General } = this.props

    General.setInputs({ languageSource })
  }
}
