/* eslint-disable react/no-unused-state */
/**
 * This component is only used in gatsby-browser.js
 * to provide every page with this context.
 */
// Packages
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

// Consts
import { styleTheme } from '../../theme/styleTheme'

// Styled Components
import { GlobalStyle } from '../../theme/GlobalStyle'
import { AppContext } from '../../utils/contexts'

// Components
import Nav from '../Nav'
import Meta from '../Meta'

import('rc-texty/assets/index.css')

class AppProvider extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    path: PropTypes.string,
  }

  constructor(props) {
    super(props)
    this.state = {
      isNavOpen: false,
      isNavPinned: false,
      startExitAnimation: false,
      path: props.path,
      triggerExitAnimation: startExitAnimation => {
        this.setState({ startExitAnimation })
      },
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
        startExitAnimation: false,
      }
    }
    return null
  }

  render() {
    const { children } = this.props
    const { isNavOpen, toggleNav, togglePinnedNav, isNavPinned } = this.state
    return (
      <ThemeProvider theme={styleTheme}>
        <Meta />
        <AppContext.Provider value={this.state}>
          <GlobalStyle />
          <Nav
            isNavOpen={isNavOpen}
            isNavPinned={isNavPinned}
            toggleNav={toggleNav}
            togglePinnedNav={togglePinnedNav}
          />
          {children}
        </AppContext.Provider>
      </ThemeProvider>
    )
  }
}

export default AppProvider
