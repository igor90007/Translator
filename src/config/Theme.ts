import EStyleSheet from 'react-native-extended-stylesheet'

import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

const theme = () =>
  EStyleSheet.build({
    // $outline: 1, // COMPONENTS LAYOUT for debug
    // Colors
    $background: '#ECE6F2',

    // Text
<<<<<<< HEAD
    $borderWidth: StyleSheet.hairlineWidth * 4,
=======
    $borderWidth: StyleSheet.hairlineWidth * 2,
>>>>>>> origin/master
    $grey: 'rgba(0,0,0,0.1)',
    $textColor: '#2196F3',

    // Font size
    $textDefault: wp('4%'),
  })

export default theme
