export function classNames(classes: Record<string, boolean>): string {
  const classNamesToApply: string[] = []

  Object.keys(classes).map(
    (c) => classes[c] === true && classNamesToApply.push(c)
  )

  return classNamesToApply.join(' ')
}
