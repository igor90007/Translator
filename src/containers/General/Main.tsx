import React from 'react'

import Screen from 'src/screens/General/Main'

import { translateData } from 'src/actions/general'

export default class MainContainer extends React.Component {
  render() {
    return <Screen translate={this.translate} />
  }

  private translate = async () => {
    const result = await translateData('en', 'ru', 'language')
    console.log(result, 'MainContainer')
  }
}
