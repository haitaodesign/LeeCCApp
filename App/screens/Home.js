import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'

import { Container } from '../components/Container'
import { Logo } from '../components/Logo'
import { InputWithButton } from '../components/TextInput'

const TEMP_BASE_CURRENCY = 'USD'
const TEMP_QUOTE_CURRENCY = 'GBP'
export default class Home extends Component {
  handlePressBaseCurrency () {
    console.log('press base currency')
  }
  handlePressQuoteCurrency () {
    console.log('press quote currency')
  }
  render () {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="default"/>
        <Logo />
        <InputWithButton buttonText={TEMP_BASE_CURRENCY} onPress={this.handlePressBaseCurrency}/>
        <InputWithButton buttonText={TEMP_QUOTE_CURRENCY} onPress={this.handlePressQuoteCurrency} editable={false}/>
      </Container>
    )
  }
}
