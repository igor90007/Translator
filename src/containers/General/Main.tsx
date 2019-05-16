import React from 'react'
import Voice from 'react-native-voice'

import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import { Text } from 'react-native'

import Screen from 'src/screens/General/Main'

import { translateData } from 'src/actions/general'

interface IData {
  inputsData: {
    data: { languageSource: string; languageTranslated: string }
  }
  fromLanguageCode: {
    data: string
  }
  fromLanguageId: {
    data: string
  }
  offline: {
    data: boolean
  }
  toLanguageCode: {
    data: string
  }
  toLanguageId: {
    data: string
  }
}

export interface ISpeechResults {
  [key: string]: any
}

const GET_DATA = gql`
  query {
    inputsData {
      data
    }
    fromLanguageCode {
      data
    }
    fromLanguageId {
      data
    }
    offline {
      data
    }
    toLanguageCode {
      data
    }
    toLanguageId {
      data
    }
  }
`

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
      <Query<IData> query={GET_DATA}>
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading...</Text>
          if (error) return <Text>Error :(</Text>

          return (
            <>
              {data && (
                <Screen
                  languageSource={data.inputsData.data.languageSource}
                  languageTranslated={data.inputsData.data.languageTranslated}
                  startVoiceRecognize={this.startVoiceRecognize}
                  stopVoiceRecognize={this.stopVoiceRecognize}
                  typeTextForTranslating={this.typeTextForTranslating}
                  shakeLanguages={this.shakeLanguages}
                  chooseFromLanguage={this.chooseFromLanguage}
                  chooseToLanguage={this.chooseToLanguage}
                  translate={this.translate}
                  fromLanguageId={data.fromLanguageId.data}
                  toLanguageId={data.toLanguageId.data}
                  offline={data.offline.data}
                />
              )}
            </>
          )
        }}
      </Query>
    )
  }

  private chooseFromLanguage = (from: string, fromLanguageId: string) => {
    // const { General } = this.props
    // General.setFromLanguageCode(from, fromLanguageId)
  }

  private chooseToLanguage = (to: string, toLanguageId: string) => {
    // const { General } = this.props
    // General.setToLanguageCode(to, toLanguageId)
  }

  private translate = async (from: string, to: string, text: string) => {
    // const { General } = this.props
    const result = await translateData(from ? `&from=${from}` : '', to, text)
    // if (result.data.error === null) {
    //   General.setInputs({ languageTranslated: result.data.result.translated })
    // } else {
    //   General.setInputs({ languageTranslated: result.data.error })
    // }
  }

  private shakeLanguages = (
    toLanguageCode: string,
    fromLanguageCode: string,
    toLanguageId: string,
    fromLanguageId: string,
  ) => {
    // const { General } = this.props
    // General.shakeLanguages(toLanguageCode, fromLanguageCode, toLanguageId, fromLanguageId)
  }

  private startVoiceRecognize = (fromLanguageCode: string) => {
    // try {
    //   Voice.start(fromLanguageCode) // en-US
    // } catch (e) {
    //   console.log(e, 'startVoiceRecognizeError')
    // }
  }

  private stopVoiceRecognize = () => {
    // try {
    //   Voice.stop()
    // } catch (e) {
    //   console.log(e, 'stopVoiceRecognizeError')
    // }
  }

  private onSpeechResultsHandler = (event: ISpeechResults) => {
    // const { General } = this.props
    // General.setInputs({ languageSource: event.value[event.value.length - 1] })
  }

  private typeTextForTranslating = (languageSource: string) => {
    // const { General } = this.props
    // General.setInputs({ languageSource })
  }
}
