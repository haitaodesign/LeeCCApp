import React, { Component } from 'react'
import { View, Text, ImageBackground, Image } from 'react-native'

import styles from './styles'

export default class Logo extends Component {
  render () {
    return (
      <View style={styles.container}>
        <ImageBackground
          resizeMode="contain"
          style={styles.containerImage}
          source={require('./images/background.png')}>
          <Image resizeMode="contain" style={styles.logo} source={require('./images/logo.png')}/>
        </ImageBackground>
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    )
  }
}
