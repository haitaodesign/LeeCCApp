import React from 'react'
import { View, StatusBar } from 'react-native'

import { Container } from '../components/Container'

export default () => (
  <Container>
    <StatusBar translucent={false} barStyle="default"/>
    <View />
  </Container>
)
