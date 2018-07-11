import PropTypes from 'prop-types'
import React from 'react'
import { Text } from 'react-native'
import moment from 'moment'

import styles from './styles'

const LastConvertend = ({base, conversionRate, quote, date}) => (
  <Text style={styles.smallText}>
    1 {base} = {conversionRate} {quote} as of {moment(date).format('MMMM D, YYYY')}
  </Text>
)

LastConvertend.propTypes = {
  base: PropTypes.string,
  conversionRate: PropTypes.number,
  quote: PropTypes.string,
  date: PropTypes.object
}
export default LastConvertend
