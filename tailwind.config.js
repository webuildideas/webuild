module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  theme: {
    fontFamily: {
      primary: ['Overpass', 'Helvetica', 'sans-serif']
    }
    // extend: {}
  },
  variants: {},
  plugins: []
}
