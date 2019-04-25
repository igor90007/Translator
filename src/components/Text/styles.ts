import EStyleSheet from 'react-native-extended-stylesheet'

import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default EStyleSheet.create({
  text: {
    color: '$textColor',
    fontSize: '$textDefault',
  },
})
