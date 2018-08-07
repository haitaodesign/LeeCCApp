import PropTypes from 'prop-types'
import React, { Component } from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'

const connectAlert = (WrappedComponent) => {
  class ConnectAlert extends Component {
    render () {
      return (
        <WrappedComponent
          {...this.props}
          alertWithType={this.context.alertWithType}
          alert={this.context.alert}
        />
      )
    }
  }
  ConnectAlert.contextTypes = {
    alertWithType: PropTypes.func,
    alert: PropTypes.func
  }
  return hoistNonReactStatics(ConnectAlert, WrappedComponent)
}

export default connectAlert
