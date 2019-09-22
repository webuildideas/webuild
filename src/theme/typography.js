// Type Scale
// f1 => 51.316px | 2.566rem
// f2 => 32.036px | 1.602rem
// f3 => 25.313px | 1.266rem
// f4 => 22.5px   | 1.125rem
// f5 => 20px     | 1rem
// f6 => 15.802px | 0.79rem
// f7 => 14.047px | 0.702rem

// Vertical Rhythm

export const typography = {
  primaryFontFamily: "'Overpass', Helvetica, sans-serif",
  tracked: '0.05rem',
  tight: '-0.035rem',
  f1: '2.566rem',
  f2: '1.602rem',
  f3: '1.266rem',
  f4: '1.125rem',
  f5: '1rem',
  f6: '0.79rem',
  f7: '0.702rem',
}

// Helper function for user to provide designer with scale
export const getScaleByPercentage = percentage => {
  const typeScale = [
    '2.566rem',
    '1.602rem',
    '1.266rem',
    '1.125rem',
    '1rem',
    '0.79rem',
    '0.702rem',
  ]

  const newBaseFontSize = (16 * percentage) / 100

  const newRemScale = typeScale.map(
    step => `${(parseFloat(step) * newBaseFontSize).toFixed(3)}px`
  )

  return { ...newRemScale }
}
