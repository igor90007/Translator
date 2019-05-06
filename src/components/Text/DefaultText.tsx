import React from 'react'

import { Text, TextProps } from 'react-native'

import styles from './styles'

export interface ITextProps extends TextProps {
  text: string
  additionalStyles: object
}

const DefaultText = (params: ITextProps) => (
  <Text style={[styles.text, params.additionalStyles]}>{params.text}</Text>
)

export default DefaultText
