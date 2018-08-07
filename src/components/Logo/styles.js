import { Dimensions } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

const imageWidth = Dimensions.get('window').width / 2

const styles = EStyleSheet.create({
  $smallContainStyle: imageWidth / 2,
  $smallImageSize: imageWidth / 4,
  $largeContainStyle: imageWidth,
  $largeImageSize: imageWidth / 2,
  container: {
    alignItems: 'center'
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '$largeContainStyle',
    height: '$largeContainStyle'
  },
  logo: {
    width: '$largeImageSize',
    tintColor: '$primaryBlue'
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
