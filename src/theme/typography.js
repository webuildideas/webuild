// Type Scale
// f1 => 40.55px  | 2.027rem
// f2 => 32.04px  | 1.602rem
// f3 => 20px     | 1rem
// f4 => 15.8px   | 0.79rem

// Vertical Rhythm

export const typography = {
  primaryFontFamily: "'Overpass', Helvetica, sans-serif",
  tracked: '0.05rem',
  tight: '-0.035rem',

  f1: '2.027rem',
  f2: '1.602rem',
  f3: '1rem',
  f4: '0.79rem',

  // Remove below
  f5: '1rem',
  f6: '0.79rem',
  f7: '0.702rem',
}

// Helper function for user to provide designer with scale
export const getScaleByPercentage = percentage => {
  const typeScale = ['2.566rem', '1.602rem', '1rem', '0.79rem']

  const newBaseFontSize = (16 * percentage) / 100

  const newRemScale = typeScale.map(
    step => `${(parseFloat(step) * newBaseFontSize).toFixed(3)}px`
  )

  return { ...newRemScale }
}
