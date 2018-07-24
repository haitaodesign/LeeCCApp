import * as React from 'react'
import { PropTypes } from 'prop-types'
import { View, Text, TouchableHighlight } from 'react-native'

import styles from './styles'
import Icon from './Icon'

const ListItem = ({text, onPress, checkmark = true, selected = false, visible = true, customIcon = null}) => {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
      <View style={styles.row}>
        <Text style={styles.text}>{text}</Text>
        {selected ? <Icon visible={visible} checkmark={checkmark}/> : <Icon/>}
        {customIcon}
      </View>
    </TouchableHighlight>
  )
}
ListItem.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  checkmark: PropTypes.bool,
  selected: PropTypes.bool,
  visible: PropTypes.bool,
  customIcon: PropTypes.element
}

export default ListItem
