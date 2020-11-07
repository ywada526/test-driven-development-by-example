export const triangle = (a: number, b: number, c: number) => {
  const sorted = [a, b, c].sort((n, m) => n - m)
  if (sorted[0] + sorted[1] <= sorted[2]) throw new Error('not triangle')
  if (a === b && a === c) return 1
  if (a === b || b === c || c === a) return 2
  return 3
}
