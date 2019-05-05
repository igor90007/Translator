import React from 'react'

import { StyleProp, Text, TextProps, TextStyle } from 'react-native'

import styles from './styles'

export interface ITextProps extends TextProps {
  children?: string
  additionalStyles?: StyleProp<TextStyle>
}

const DefaultText: React.FC<ITextProps> = ({ children, additionalStyles }) => (
  <Text style={[styles.text, additionalStyles]}>{children}</Text>
)

export default DefaultText
