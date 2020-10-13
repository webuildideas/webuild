module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
    // defaultLineHeights: true,
    // standardFontWeights: true
  },
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  theme: {
    fontSize: {
      xl: '2.027rem',
      lg: '1.602rem',
      base: '1rem',
      sm: '0.79rem'
    },
    fontFamily: {
      primary: ['Overpass', 'Helvetica', 'sans-serif']
    },
    extend: {}
  },
  variants: {},
  plugins: []
}
