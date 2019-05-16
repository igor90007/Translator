import React from 'react'
import Voice from 'react-native-voice'

import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import { Text } from 'react-native'

import Settings from 'src/config/Settings'
import Screen from 'src/screens/General/Main'

import { translateData } from 'src/actions/general'

interface IData {
  languageSource: string
  languageTranslated: string
  fromLanguageCode: string
  fromLanguageId: string
  offline: boolean
  toLanguageCode: string
  toLanguageId: string
}

export interface ISpeechResults {
  [key: string]: any
}

const GET_DATA = gql`
  query {
    languageSource @client
    languageTranslated @client
    fromLanguageCode @client
    fromLanguageId @client
    offline @client
    toLanguageCode @client
    toLanguageId @client
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
                  languageSource={data.languageSource}
                  languageTranslated={data.languageTranslated}
                  startVoiceRecognize={this.startVoiceRecognize}
                  stopVoiceRecognize={this.stopVoiceRecognize}
                  typeTextForTranslating={this.typeTextForTranslating}
                  shakeLanguages={this.shakeLanguages}
                  chooseFromLanguage={this.chooseFromLanguage}
                  chooseToLanguage={this.chooseToLanguage}
                  translate={this.translate}
                  fromLanguageId={data.fromLanguageId}
                  toLanguageId={data.toLanguageId}
                  offline={data.offline}
                />
              )}
            </>
          )
        }}
      </Query>
    )
  }

  private chooseFromLanguage = (fromLanguageCode: string, fromLanguageId: string) => {
    Settings.client.writeData({
      data: {
        fromLanguageCode,
        fromLanguageId,
      },
    })
  }

  private chooseToLanguage = (toLanguageCode: string, toLanguageId: string) => {
    Settings.client.writeData({
      data: {
        toLanguageCode,
        toLanguageId,
      },
    })
  }

  private translate = async (from: string, to: string, text: string) => {
    const result = await translateData(from ? `&from=${from}` : '', to, text)

    if (result.data.error === null) {
      Settings.client.writeData({
        data: {
          languageTranslated: result.data.result.translated,
        },
      })
    } else {
      Settings.client.writeData({
        data: {
          languageTranslated: result.data.error,
        },
      })
    }
  }

  private shakeLanguages = (
    toLanguageCode: string,
    fromLanguageCode: string,
    toLanguageId: string,
    fromLanguageId: string,
  ) => {
    Settings.client.writeData({
      data: {
        fromLanguageCode: toLanguageCode,
        fromLanguageId: toLanguageId,
        toLanguageCode: fromLanguageCode,
        toLanguageId: fromLanguageId === '0' ? '1' : fromLanguageId,
      },
    })
  }

  private startVoiceRecognize = (fromLanguageCode: string) => {
    try {
      Voice.start(fromLanguageCode) // en-US
    } catch (e) {
      console.log(e, 'startVoiceRecognizeError')
    }
  }

  private stopVoiceRecognize = () => {
    try {
      Voice.stop()
    } catch (e) {
      console.log(e, 'stopVoiceRecognizeError')
    }
  }

  private onSpeechResultsHandler = (event: ISpeechResults) => {
    Settings.client.writeData({
      data: {
        languageSource: event.value[event.value.length - 1],
      },
    })
  }

  private typeTextForTranslating = (languageSource: string) => {
    Settings.client.writeData({
      data: {
        languageSource,
      },
    })
  }
}
