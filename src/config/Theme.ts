import EStyleSheet from 'react-native-extended-stylesheet'

import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

const theme = () =>
  EStyleSheet.build({
    // $outline: 1, // COMPONENTS LAYOUT for debug
    // Colors
    $background: '#ECE6F2',

    // Text
    $textColor: '#490074',
    $borderWidth: 2 * StyleSheet.hairlineWidth,

    // Font size
    $textDefault: wp('4%'),
  })

export default theme
