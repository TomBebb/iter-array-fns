export default interface BaseExtIter<T> extends Iterable<T> {
  map<TRet>(mapFn: (item: T) => TRet): BaseExtIter<TRet>
  filter(filterFn: (item: T) => boolean): BaseExtIter<T>
  reduce<TAcc>(reducer: (accumulator: TAcc, curr: T) => TAcc, initial: TAcc)

  some(check: (v: T) => boolean): boolean
  count(): number
  includes(val: T): boolean

  concat(other: BaseExtIter<T>): BaseExtIter<T>
  join(separator?: string): string
}
