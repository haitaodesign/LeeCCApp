import EStyleSheet from 'react-native-extended-stylesheet'

const styles = EStyleSheet.create({
  constainer: {
    flex: 1
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    width: 19,
    marginRight: 11
  },
  text: {
    color: '$white',
    fontSize: 14,
    paddingVertical: 20,
    fontWeight: '300'
  }
})

export default styles
