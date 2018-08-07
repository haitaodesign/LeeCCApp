import React, { Component } from 'react'
import { View, Text, StatusBar, FlatList } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import currencies from '../data/currencies'
import { ListItem, Separator } from '../components/List'
import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies'
class Currencylist extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    primaryColor: PropTypes.string
  }
  _handleSelectedOnPress = (currency) => {
    const { type } = this.props.navigation.state.params
    if (type === 'base') {
      this.props.dispatch(changeBaseCurrency(currency))
    } else if (type === 'quote') {
      this.props.dispatch(changeQuoteCurrency(currency))
    }
    this.props.navigation.goBack(null)
  }
  render () {
    let comparisonCurrency = this.props.baseCurrency
    if (this.props.navigation.state.params.type === 'quote') {
      comparisonCurrency = this.props.quoteCurrency
    }
    return (
      <View style={{flex: 1}}>
        <StatusBar translucent={false} barStyle="default"/>
        <FlatList
          data={currencies}
          renderItem={({item}) => (
            <ListItem
              text={item}
              selected={item === comparisonCurrency}
              iconBackground={this.props.primaryColor}
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

const mapStateToProps = state => ({
  baseCurrency: state.currencies.baseCurrency,
  quoteCurrency: state.currencies.quoteCurrency,
  primaryColor: state.theme.primaryColor
})

export default connect(mapStateToProps)(Currencylist)
