import React, { Component } from 'react'
import { View, StatusBar, KeyboardAvoidingView, Platform } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container } from '../components/Container'
import { Logo } from '../components/Logo'
import { InputWithButton } from '../components/TextInput'
import { ClearButton } from '../components/Button'
import { LastConverted } from '../components/Text'
import { Header } from '../components/Header'
import { connectAlert } from '../components/Alert'

import { changeCurrencyAmount, swapCurrency, getInitialConversion } from '../store/actions/currencies'
class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    amount: PropTypes.number,
    conversionRate: PropTypes.number,
    lastConvertedDate: PropTypes.object,
    isFetching: PropTypes.bool,
    primaryColor: PropTypes.string,
    currencyError: PropTypes.string,
    alertWithType: PropTypes.func
  }
  componentWillMount () {
    this.props.dispatch(getInitialConversion())
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.currencyError && !this.props.currencyError) {
      this.props.alertWithType('error', 'Error', nextProps.currencyError)
    }
  }
  handlePressBaseCurrency = () => {
    this.props.navigation.navigate('CurrencyList', { title: 'BaseCurrency', type: 'base' })
  }
  handlePressQuoteCurrency = () => {
    this.props.navigation.navigate('CurrencyList', { title: 'QuoteCurrency', type: 'quote' })
  }
  handleSwapCurrency = () => {
    this.props.dispatch(swapCurrency())
  }
  handleOnChangeText = (value) => {
    this.props.dispatch(changeCurrencyAmount(value))
  }
  handleOptionsPress = () => {
    this.props.navigation.navigate('Options')
  }
  render () {
    let quotePrice = '...'
    if (!this.props.isFetching) {
      quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2)
    }
    return (
      <Container backgroundColor={this.props.primaryColor}>
        <StatusBar translucent={false} barStyle="light-content" backgroundColor={this.props.primaryColor}/>
        <Header onPress={this.handleOptionsPress}/>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : ''}>
          <Logo tintColor={this.props.primaryColor}/>
          <InputWithButton
            buttonText={this.props.baseCurrency}
            onPress={this.handlePressBaseCurrency}
            defaultValue={this.props.amount.toString()}
            keyboardType="numeric"
            textColor={this.props.primaryColor}
            onChangeText={this.handleOnChangeText}/>
          <InputWithButton
            buttonText={this.props.quoteCurrency}
            onPress={this.handlePressQuoteCurrency}
            value={quotePrice}
            textColor={this.props.primaryColor}
            editable={false}/>
          <LastConverted
            date={this.props.lastConvertedDate}
            base={this.props.baseCurrency}
            quote={this.props.quoteCurrency}
            conversionRate={this.props.conversionRate}/>
          <ClearButton onPress={this.handleSwapCurrency} text="Reverse Currencies"/>
        </KeyboardAvoidingView>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const baseCurrency = state.currencies.baseCurrency
  const quoteCurrency = state.currencies.quoteCurrency
  const conversionSelector = state.currencies.conversions[baseCurrency] || {}
  const rates = conversionSelector.rates || {}
  return {
    baseCurrency,
    quoteCurrency,
    amount: state.currencies.amount,
    conversionRate: rates[quoteCurrency] || 0,
    lastConvertedDate: conversionSelector.date ? new Date(conversionSelector.date) : new Date(),
    isFetching: conversionSelector.isFetching,
    primaryColor: state.theme.primaryColor,
    currencyError: state.currencies.error
  }
}

export default connect(mapStateToProps)(connectAlert(Home))
