export const getEstimatedReadingTime = (wordCount: number): number => {
  const avgWpm = 225
  return Math.ceil(wordCount / avgWpm)
}
