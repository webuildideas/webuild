/* eslint-disable react/no-unused-state */
/**
 * This components is only used in gatsby-browser.js
 * to provide every page with this context.
 */
// Packages
import React, { Component, createContext } from 'react'
import PropTypes from 'prop-types'

export const AppContext = createContext({
  isNavOpen: false,
  isNavPinned: false,
  toggleNav: () => {},
  togglePinnedNav: () => {},
})

class AppProvider extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    path: PropTypes.string,
  }

  constructor(props) {
    super(props)
    this.state = {
      isNavOpen: false,
      path: props.path,
      toggleNav: navState => {
        this.setState({ isNavOpen: navState })
      },
      togglePinnedNav: navState => {
        this.setState({ isNavPinned: navState })
      },
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.path !== prevState.path) {
      return {
        isNavOpen: false,
        path: nextProps.path,
      }
    }
    return null
  }

  render() {
    const { children } = this.props
    return (
      <AppContext.Provider value={this.state}>{children}</AppContext.Provider>
    )
  }
}

export default AppProvider
