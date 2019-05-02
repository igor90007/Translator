import React from 'react'

import { Text, StyleProp, TextStyle } from 'react-native'

import styles from './styles'

export interface ITextProps extends Text {
  text: string
  additionalStyles?: StyleProp<TextStyle>
}

const DefaultText: React.FC<ITextProps> = ({ text, additionalStyles }) => (
  <Text style={[styles.text, additionalStyles]}>{text}</Text>
)

export default DefaultText
