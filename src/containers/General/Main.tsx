import React from 'react'
import Voice from 'react-native-voice'

import { inject, observer } from 'mobx-react'

import Screen from '../../screens/General/Main'

export interface IProps {
  General: {
    inputsData: { languageSource: string }
    setInputs(data: object): void
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
        startVoiceRecognize={this.startVoiceRecognize}
        stopVoiceRecognize={this.stopVoiceRecognize}
      />
    )
  }

  private async startVoiceRecognize() {
    try {
      await Voice.start('en-US')
    } catch (e) {
      console.log(e, 'startVoiceRecognizeError')
    }
  }

  private async stopVoiceRecognize() {
    try {
      await Voice.stop()
    } catch (e) {
      console.log(e, 'stopVoiceRecognizeError')
    }
  }

  private onSpeechResultsHandler = (event: ISpeechResults) => {
    const { General } = this.props

    General.setInputs({ languageSource: event.value[event.value.length - 1] })
  }
}
