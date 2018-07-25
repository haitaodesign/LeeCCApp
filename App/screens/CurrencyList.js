import React, { Component } from 'react'
import { View, Text, StatusBar, FlatList } from 'react-native'

import currencies from '../data/currencies'

import { ListItem, Separator } from '../components/List'
const TEMP_CURRENT_CURRENCY = 'CAD'
export default class Currencylist extends Component {
  _handleSelectedOnPress = () => {
    this.props.navigation.goBack(null)
  }
  render () {
    return (
      <View style={{flex: 1}}>
        <StatusBar translucent={false} barStyle="default"/>
        <FlatList
          data={currencies}
          renderItem={({item}) => (
            <ListItem
              text={item}
              selected={item === TEMP_CURRENT_CURRENCY}
              onPress={this._handleSelectedOnPress}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    )
  }
}
