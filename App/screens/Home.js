import React, { Component } from 'react'
import { View, StatusBar, KeyboardAvoidingView } from 'react-native'

import { Container } from '../components/Container'
import { Logo } from '../components/Logo'
import { InputWithButton } from '../components/TextInput'
import { ClearButton } from '../components/Button'
import { LastConverted } from '../components/Text'
import { Header } from '../components/Header'

const TEMP_BASE_CURRENCY = 'USD'
const TEMP_QUOTE_CURRENCY = 'GBP'
const TEMP_LAST_CONVERTED = new Date()
const TEMP_CONVERSION_RATE = 0.79739
export default class Home extends Component {
  handlePressBaseCurrency () {
    console.log('press base currency')
  }
  handlePressQuoteCurrency () {
    console.log('press quote currency')
  }
  handleSwapCurrency () {
    console.log('press swap currency')
  }
  handleOnChangeText (value) {
    console.log('change text', value)
  }
  render () {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="default"/>
        <Header onPress={this.handlePressBaseCurrency}/>
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <InputWithButton
            buttonText={TEMP_BASE_CURRENCY}
            onPress={this.handlePressBaseCurrency}
            keyboardType="numeric"
            onChangeText={this.handleOnChangeText}/>
          <InputWithButton
            buttonText={TEMP_QUOTE_CURRENCY}
            onPress={this.handlePressQuoteCurrency}
            editable={false}/>
          <LastConverted
            date={TEMP_LAST_CONVERTED}
            base={TEMP_BASE_CURRENCY}
            quote={TEMP_QUOTE_CURRENCY}
            conversionRate={TEMP_CONVERSION_RATE}/>
          <ClearButton onPress={this.handleSwapCurrency} text="Reverse Currencies"/>
        </KeyboardAvoidingView>
      </Container>
    )
  }
}
