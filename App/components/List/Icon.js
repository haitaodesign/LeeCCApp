import * as React from 'react'
import PropTypes from 'prop-types'
import { View, Image } from 'react-native'

import styles from './styles'

const Icon = ({visible, checkmark}) => {
  let iconStyle = [styles.icon]
  if (visible) {
    iconStyle.push(styles.iconVisible)
  }
  return (
    <View style={iconStyle}>
      <Image 
        style={styles.checkIcon}
        source={require('./images/check.png')}
        resizeMode="contain"
      />
    </View>
  )
}

Icon.propTypes = {
  visible: PropTypes.bool,
  checkmark: PropTypes.bool
}

export default Icon
