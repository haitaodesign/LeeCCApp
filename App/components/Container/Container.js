import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'

const Container = ({ children }) => (
  <View style={styles.constainer}>
    {children}
  </View>
)

Container.propTypes = {
  children: PropTypes.element
}

export default Container
