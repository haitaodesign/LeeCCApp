import EStyleSheet from 'react-native-extended-stylesheet'
import { StatusBar } from 'react-native'
const styles = EStyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    // 安卓 ios 样式适配
    '@media ios': {
      paddingTop: 20
    },
    '@media android': {
      paddingTop: StatusBar.currentHeight
    }
  },
  button: {
    alignSelf: 'flex-end',
    paddingVertical: 5,
    paddingHorizontal: 20
  },
  icon: {
    width: 18
  }
})

export default styles
