export default function some<T>(
  iter: Iterable<T>,
  check: (v: T) => boolean
): boolean {
  for (const item of iter) {
    if (check(item)) return true
  }
  return false
}
