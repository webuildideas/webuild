/* eslint-disable global-require */
module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  variants: {
    extend: {
      fontWeight: ['hover', 'focus']
    }
  },
  theme: {
    extend: {
      height: {
        100: '400px',
        140: '560px',
        160: '640px',
        235: '940px'
      },
      translate: {
        '3/20': '-15%'
      },
      borderWidth: {
        1: '1px'
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)'
      },
      zIndex: {
        60: '60'
      }
    },
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
      10: '40px',
      full: '9999px'
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
      newBlack: '#262627',

      // Primary Colors
      deepViolet: '#340096',
      electricViolet: '#8900FF',
      lilac: '#BC99FF',
      lavender: '#D5BFFF',
      lavenderMist: '#E6E2FF',
      foundation: '#F2F0FF',

      // Secondary Colors
      blueRibbon: '#2250FF',
      salmon: '#FFA578',
      peachy: '#FFD8BA',
      champagnePink: '#FFEBDE',
      electricIndigo: '#5F00FF',
      peach: '#FFF6F0',
      santaFe: '#A96C54',
      beauBlue: '#DCEAFF',
      snow: '#F9F9F9',
      mischka: '#F2F0FF',
      brightBlue: '#F0F6FF',

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
      }
    },

    fontFamily: {
      primary: ['Overpass', 'sans-serif'],
      secondary: ['Noto Serif SC', 'serif'],
      crimson: ['Crimson Pro', 'serif'],
      courier: [
        `Courier New`,
        'Courier',
        'Lucida Sans Typewriter',
        'Lucida Typewriter',
        'monospace'
      ]
    },

    fontSize: {
      '8xl': '4rem',
      '7xl': '3.375rem',
      '6xl': '2.625rem',
      '5xl': '2.25rem',
      '4xl': '2rem',
      '3xl': '1.75rem',
      '2.5xl': '1.5rem',
      '2xl': '1.375rem',
      xl: '1.25rem',
      lg: '1.125rem',
      base: '1rem',
      tiny: '0.875rem',
      sm: '0.75rem',
      xs: '0.625rem'
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
      xl: '1280px',
      '2xl': '2560px',
      1536: '1536px',
      maxSm: { max: '425px' },
      maxMd: { max: '768px' },
      maxLg: { max: '1024px' },
      maxXl: { max: '1280px' },
      max2xl: { max: '2560px' },
      min1900: { min: '1900px' }
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
      50: '200px',
      51: '204px',
      52: '208px',
      53: '212px',
      54: '216px',
      55: '220px',
      56: '224px',
      57: '228px',
      58: '232px',
      59: '236px',
      60: '240px',
      68: '272px'
    },
    right: {
      '4/5': '80%'
    }
  }
}
