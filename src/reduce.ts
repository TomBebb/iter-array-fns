export default function reduce<T, TAcc>(
  iter: Iterable<T>,
  reducer: (accumulator: TAcc, curr: T) => TAcc,
  initial: TAcc
) {
  let curr: TAcc = initial
  for (const item of iter) {
    curr = reducer(curr, item)
  }
  return curr
}
