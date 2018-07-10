import { Dimensions } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

const imageWidth = Dimensions.get('window').width / 2

const styles = EStyleSheet.create({
  container: {
    alignItems: 'center'
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: imageWidth,
    height: imageWidth
  },
  logo: {
    width: imageWidth / 2
  },
  text: {
    color: '$white',
    fontSize: 28,
    marginTop: 15,
    fontWeight: '600',
    letterSpacing: -0.5 // 字符间距--iOS
  }
})

export default styles
