/* eslint-disable react/no-unused-state */
/**
 * This components is only used in gatsby-browser.js
 * to provide every page with this context.
 */
// Packages
import React, { Component, createContext } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

// Consts
import { styleTheme } from '../../theme/styleTheme'

// Styled Components
import { GlobalStyle } from '../../theme/GlobalStyle'

// Components
import Nav from '../Nav'

export const AppContext = createContext({
  isNavOpen: false,
  isNavPinned: false,
  toggleNav: () => {},
  togglePinnedNav: () => {},
  navColorTheme: 'light',
  setNavColorTheme: () => {},
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
      isNavPinned: false,
      path: props.path,
      toggleNav: navState => {
        this.setState({ isNavOpen: navState })
      },
      togglePinnedNav: navState => {
        this.setState({ isNavPinned: navState })
      },
      navColorTheme: 'light',
      setNavColorTheme: colorTheme => {
        this.setState({ navColorTheme: colorTheme })
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
    const {
      isNavOpen,
      toggleNav,
      togglePinnedNav,
      isNavPinned,
      navColorTheme,
    } = this.state
    return (
      <ThemeProvider theme={styleTheme}>
        <AppContext.Provider value={this.state}>
          <GlobalStyle />
          <Nav
            isNavPinned={isNavPinned}
            isNavOpen={isNavOpen}
            toggleNav={toggleNav}
            togglePinnedNav={togglePinnedNav}
            colorTheme={navColorTheme}
          />
          {children}
        </AppContext.Provider>
      </ThemeProvider>
    )
  }
}

export default AppProvider
