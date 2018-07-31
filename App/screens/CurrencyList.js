import React, { Component } from 'react'
import { View, Text, StatusBar, FlatList } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import currencies from '../data/currencies'
import { ListItem, Separator } from '../components/List'
import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies';
const TEMP_CURRENT_CURRENCY = 'CAD'
class Currencylist extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func
  }
  _handleSelectedOnPress = (currency) => {
    console.log(currency)
    const { type } = this.props.navigation.state.params
    if (type === 'base') {
      this.props.dispatch(changeBaseCurrency(currency))
    } else if (type === 'quote') {
      this.props.dispatch(changeQuoteCurrency(currency))
    }
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
              onPress={() => this._handleSelectedOnPress(item)}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    )
  }
}

export default connect()(Currencylist)
