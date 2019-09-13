// Packages
import {render} from 'react-dom'
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components'

// Consts
import { styleTheme } from '../theme/styleTheme'

// Styled Components
import { GlobalStyle } from '../theme/GlobalStyle'

// automatically import all files ending in *.stories.js
const req = require.context('../components', true, /\.stories\.js$/);

function loadStories() {
  // Add Global Decorator to inject Global Styles and Theme
  addDecorator(s => {
    return (
      <ThemeProvider theme={styleTheme}>
        <>
          <GlobalStyle />
          {s()}
        </>
      </ThemeProvider>
    )
  })
  
  // Load Files
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
