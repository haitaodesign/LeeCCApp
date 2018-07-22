import React, { Component } from 'react'
import { View, Text, StatusBar, FlatList } from 'react-native'

import currencies from '../data/currencies'

export default class Currencylist extends Component {
  render () {
    return (
      <View style={{flex: 1}}>
        <StatusBar translucent={false} barStyle="default"/>
        <FlatList
          data={currencies}
          renderItem={({item}) => <Text>{item}</Text>}
          keyExtractor={item => item}
        />
      </View>
    )
  }
}
