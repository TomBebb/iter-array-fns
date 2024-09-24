export default function* flat<T>(iter: Iterable<Iterable<T>>): Iterable<T> {
  for (const item of iter) {
    for (const sub of item) yield sub as T
  }
}
