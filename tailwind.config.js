/* eslint-disable global-require */
module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  theme: {
    borderRadius: {
      px: '1px',
      0: '0px',
      0.5: '2px',
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px'
    },

    boxShadow: {
      sm: '0px 1px 3px rgba(0, 0, 0, 0.1)',
      DEFAULT: '0px 2px 6px rgba(0, 0, 0, 0.1)',
      md: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      lg: '0px 8px 20px rgba(0, 0, 0, 0.14)',
      xl: '0px 10px 30px rgba(0, 0, 0, 0.14)'
    },

    colors: {
      // Common Colors
      black: '#0E0916',
      white: '#ffffff',
      transparent: 'transparent',
      current: 'currentColor',

      // Primary Colors
      deepViolet: '#340096',
      electricViolet: '#8900FF',
      lilac: '#BC99FF',
      lavender: '#D5BFFF',
      lavenderMist: '#E6E2FF',
      foundation: '#F2F0FF',

      // Secondary Colors
      blueRibbon: '#2250FF',
      electricIndigo: '#5F00FF',

      // Gray Scale
      gray: {
        100: '#FBFBFC',
        200: '#F6F7F9',
        300: '#EEEFF0',
        400: '#E2E4E8',
        500: '#C8CCD4',
        600: '#9297A1',
        700: '#525761',
        800: '#2B2E34'
      },

      // UI Accent Colors
      ui: {
        info: {
          light: '#DCEAFF',
          dark: '#2C5794'
        },
        succes: {
          info: '#DFF2BF',
          dark: '#2E5109'
        },
        warning: {
          light: '#FEF3C8',
          dark: '#8D5500'
        },
        error: {
          light: '#FFDFE4',
          dark: '#CD1900'
        }
      },

      vulcan: '#0E0E1B',
      tuna: '#3E3E49',
      comet: '#53536A',
      stormGrey: '#757588',
      bisonHide: '#C7B2AB',
      coldTurkey: '#D2C1BC',
      concrete: '#F3F3F3',
      snow: '#F9F9F9',
      error: 'red'
    },

    fontFamily: {
      primary: ['Overpass', 'sans-serif'],
      secondary: ['Noto Serif SC', 'serif']
    },

    fontSize: {
      '8xl': '4rem',
      '7xl': '3.375rem',
      '6xl': '2.625rem',
      '5xl': '2.25rem',
      '4xl': '2rem',
      '3xl': '1.75rem',
      '2xl': '1.375rem',
      xl: '1.25rem',
      lg: '1.125rem',
      base: '1rem',
      tiny: '0.875rem',
      sm: '0.75rem'
    },

    letterSpacing: {
      tightest: '-1px;',
      tighter: '-0.5px',
      normal: '0',
      wider: '0.5px',
      widest: '1px'
    },

    lineHeight: {
      none: '1',
      tight: '1.2',
      snug: '1.4',
      normal: '1.5',
      relaxed: '1.6',
      loose: '1.7',
      double: '2'
    },

    screens: {
      sm: '425px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      '2xl': '1536px',
      maxSm: { max: '425px' },
      maxMd: { min: '426px', max: '768px' },
      maxLg: { min: '769px', max: '1024px' },
      maxXl: { min: '1025px', max: '1440px' },
      max2xl: { min: '1441px', max: '1536px' }
    },

    spacing: {
      px: '1px',
      0: '0px',
      0.5: '2px',
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
      11: '44px',
      12: '48px',
      13: '52px',
      14: '56px',
      15: '60px',
      16: '64px',
      17: '68px',
      18: '72px',
      19: '76px',
      20: '80px',
      21: '84px',
      22: '88px',
      23: '92px',
      24: '96px',
      25: '100px',
      26: '104px',
      27: '108px',
      28: '112px',
      29: '116px',
      30: '120px',
      31: '124px',
      32: '128px',
      33: '132px',
      34: '136px',
      35: '140px',
      36: '144px',
      37: '148px',
      38: '152px',
      39: '156px',
      40: '160px',
      41: '164px',
      42: '168px',
      43: '172px',
      44: '176px',
      45: '180px',
      46: '184px',
      47: '188px',
      48: '192px',
      49: '196px',
      50: '200px'
    }
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
}
