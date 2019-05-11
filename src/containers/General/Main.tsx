import React from 'react'
import Voice from 'react-native-voice'

import { Button } from 'react-native'

export default class MainContainer extends React.Component {
  constructor(props: object) {
    super(props)
    Voice.onSpeechResults = this.onSpeechResultsHandler.bind(this)
  }

  componentWillUnmount() {
    Voice.destroy().then(Voice.removeAllListeners)
  }

  render() {
    return (
      <>
        <Button onPress={this.onStartButtonPress} title="Start recognize" />
        <Button onPress={this.onStopPress} title="Stop recognize" />
      </>
    )
  }

  private async onStartButtonPress() {
    try {
      await Voice.start('en-US')
    } catch (e) {
      console.log(e, 'onStartButtonPressErr')
    }
  }

  private async onStopPress() {
    try {
      await Voice.stop()
    } catch (e) {
      console.log(e, 'onStopPressErr')
    }
  }

  private onSpeechResultsHandler = (event: object) => {
    console.log(event, 'onSpeechResultsHandler')
  }
}
