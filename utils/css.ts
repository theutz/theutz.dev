export function countToColumns(
  n: number[] | number
): string[] | string | undefined {
  if (Array.isArray(n)) return n.map(countToColumns) as string[]
  if (!n) return undefined
  return `repeat(${n}, 1fr)`
}
