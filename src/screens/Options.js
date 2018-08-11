import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, StatusBar, Platform, Linking } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ListItem, Separator } from '../components/List'
import { connectAlert } from '../components/Alert'
const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md'
const ICON_COLOR = '#868686'
const ICON_SIZE = 23
class Options extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    alertWithType: PropTypes.func
  }
  _handlePressThemes = () => {
    this.props.navigation.navigate('Themes')
  }
  _handlePressSite () {
    Linking.openURL('http://fixer.io').catch(() => {
      console.log(this.props)
      this.props.alertWithType('error', 'Sorry!', "Fixer.io can't be opened right now.")
    })
  }
  render () {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default"/>
        <ListItem text="Themes"
          onPress={this._handlePressThemes}
          customIcon={
            <Ionicons name={`${ICON_PREFIX}-arrow-forward`} size={ICON_SIZE} color={ICON_COLOR}/>
          }/>
        <Separator />
        <ListItem text="Fixer.io"
          onPress={this._handlePressSite.bind(this)}
          customIcon={
            <Ionicons name={`${ICON_PREFIX}-link`} size={ICON_SIZE} color={ICON_COLOR}/>
          }/>
      </ScrollView>
    )
  }
}

export default connectAlert(Options)
