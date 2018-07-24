import * as React from 'react'
import PropTypes from 'prop-types'
import { View, Image } from 'react-native'

import styles from './styles'

const Icon = ({visible, checkmark, iconBackground}) => {
  let iconStyle = [styles.icon]
  if (visible) {
    iconStyle.push(styles.iconVisible)
  }
  if (iconBackground) {
    iconStyle.push({ backgroundColor: iconBackground })
  }
  return (
    <View style={iconStyle}>
      { checkmark
        ? <Image
          style={styles.checkIcon}
          source={require('./images/check.png')}
          resizeMode="contain"
        /> : null }
    </View>
  )
}

Icon.propTypes = {
  visible: PropTypes.bool,
  checkmark: PropTypes.bool
}

export default Icon
