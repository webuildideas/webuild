// ================================================================================================

// DEPRECATED

// ================================================================================================

// Consts
const baseFontSize = 20
const baseLineHeight = 1.6

// Base Rhythm Unit = 32px
const baseVR = baseFontSize * baseLineHeight

// Get a responsive rhythm unit for spacing
export const rhythmUnit = (multiple: number) =>
  `${(baseVR * multiple) / baseFontSize}rem`
