// Packages
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { configure, addDecorator } from "@storybook/react"
import { action } from "@storybook/addon-actions"

// Components
import AppProvider from '../src/components/AppProvider'

// Consts
import { styleTheme } from '../src/theme/styleTheme'

// Styled Components
import { GlobalStyle } from '../src/theme/GlobalStyle'

// automatically import all files ending in *.stories.js
configure(require.context("../src", true, /\.stories\.js$/), module)

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => { },
  hovering: () => { },
}
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = ""
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}

addDecorator(story => (
  <ThemeProvider theme={styleTheme}>
    <>
      <GlobalStyle />
      {story()}
    </>
  </ThemeProvider>
))
