/* eslint-disable global-require */
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true
  },
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  theme: {
    fontSize: {
      xl: '2.027rem',
      lg: '1.602rem',
      base: '1rem',
      sm: '0.79rem'
    },
    colors: {
      black: {
        base: '#0E0E1B',
        hover: '#3E3E49'
      },
      vulcan: '#0E0E1B',
      tuna: '#3E3E49',
      comet: '#53536A',
      stormGrey: '#757588',
      bisonHide: '#C7B2AB',
      coldTurkey: '#D2C1BC',
      concrete: '#F3F3F3',
      snow: '#F9F9F9',
      white: '#FFF'
    },
    fontFamily: {
      primary: ['Overpass', 'Helvetica', 'sans-serif']
    },
    extend: {}
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')]
}
