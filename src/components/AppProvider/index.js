/* eslint-disable react/no-unused-state */
import React, { Component, createContext } from 'react'
import PropTypes from 'prop-types'

export const AppContext = createContext()

class AppProvider extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  state = {
    isNavOpen: false,
    toggleNav: navState => {
      this.setState({ isNavOpen: navState })
    },
  }

  render() {
    const { children } = this.props
    return (
      <AppContext.Provider value={this.state}>{children}</AppContext.Provider>
    )
  }
}

export default AppProvider
