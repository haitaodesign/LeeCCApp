import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'

const Container = ({ children, backgroundColor }) => {
  console.log(styles)
  const containerStyles = [styles.container]
  console.log(containerStyles)
  if (backgroundColor) {
    containerStyles.push({ backgroundColor })
  }
  console.log(containerStyles)
  return (
    <View style={containerStyles}>
      {children}
    </View>
  )
}

Container.propTypes = {
  children: PropTypes.any,
  backgroundColor: PropTypes.string
}

export default Container
