import React, { Component } from 'react'
import { ScrollView, StatusBar, Platform } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ListItem, Separator } from '../components/List'
const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md'
const ICON_COLOR = '#868686'
const ICON_SIZE = 23
export default class Options extends Component {
  _handlePressThemes = () => {
    this.props.navigation.navigate('Themes')
  }
  _handlePressSite () {
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
