import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'

import { StyleProp, Text, TextProps, TextStyle } from 'react-native'

export interface ITextProps extends TextProps {
  additionalStyles?: StyleProp<TextStyle>
}

const DefaultText: React.FC<ITextProps> = ({ children, additionalStyles }) => (
  <Text style={[styles.text, additionalStyles]}>{children}</Text>
)

const styles = EStyleSheet.create({
  text: {
    color: '$textColor',
    fontSize: '$textDefault',
  },
})

export default DefaultText
