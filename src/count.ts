export default function count<T>(iter: Iterable<T>): number {
  let total = 0

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  for (const _ of iter) total++

  return total
}
