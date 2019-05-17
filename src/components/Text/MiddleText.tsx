import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'

import { StyleProp, Text, TextProps, TextStyle } from 'react-native'

export interface IMiddleTextProps extends TextProps {
  additionalStyles?: StyleProp<TextStyle>
}

export const MiddleText: React.FC<IMiddleTextProps> = ({ children, additionalStyles }) => (
  <Text style={[styles.text, additionalStyles]}>{children}</Text>
)

const styles = EStyleSheet.create({
  text: {
    color: '$textColor',
    fontSize: '$textDefault',
  },
})
