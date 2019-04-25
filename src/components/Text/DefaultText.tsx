import React from 'react'

import { Text } from 'react-native'

import styles from './styles'

interface Params {
  text: string
  additionalStyles: object
}

const DefaultText = (params: Params) => (
  <Text style={[styles.text, params.additionalStyles]}>{params.text}</Text>
)

export default DefaultText
