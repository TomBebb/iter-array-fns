export default function* map<TSrc, TDest>(
  src: Iterable<TSrc>,
  map: (src: TSrc) => TDest
): Iterable<TDest> {
  for (const item of src) yield map(item)
}
