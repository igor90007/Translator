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
    $borderWidth: StyleSheet.hairlineWidth * 2,
=======
    $borderWidth: StyleSheet.hairlineWidth * 4,
>>>>>>> 7c9b58e8564659961b2f74b3226571bdffb575a4
    $grey: 'rgba(0,0,0,0.1)',
    $textColor: '#2196F3',

    // Font size
    $textDefault: wp('4%'),
  })

export default theme
