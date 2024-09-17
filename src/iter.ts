import BaseExtIter from './base'

export default class ExtIter<T> implements BaseExtIter<T> {
  constructor(public readonly iter: Iterable<T>) {}
  flat(): BaseExtIter<T> {
    const iter = this.iter
    return new ExtIter(
      (function* (): Iterable<T> {
        for (const item of iter) {
          if (typeof item === 'object' && item![Symbol.iterator]) {
            for (const sub of item as Iterable<T>) yield sub as T
          } else yield item
        }
      })()
    )
  }
  join(separator: string = ''): string {
    let full = ''
    const iter = this.iter
    for (const item of iter) {
      if (full.length !== 0) full += separator
      full += item
    }
    return full
  }
  concat(other: BaseExtIter<T>): BaseExtIter<T> {
    const iter = this.iter
    return new ExtIter(
      (function* (): Iterable<T> {
        for (const item of iter) yield item
        for (const item of (other as ExtIter<T>).iter) yield item
      })()
    )
  }
  includes(val: T): boolean {
    const iter = this.iter
    for (const item of iter) if (val === item) return true

    return false
  }
  count(): number {
    const iter = this.iter
    let total = 0

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const _ of iter) total++

    return total
  }
  map<TRet>(mapFn: (item: T) => TRet): BaseExtIter<TRet> {
    const iter = this.iter
    return new ExtIter(
      (function* (): Iterable<TRet> {
        for (const item of iter) yield mapFn(item)
      })()
    )
  }
  filter(filterFn: (item: T) => boolean): BaseExtIter<T> {
    const iter = this.iter
    return new ExtIter(
      (function* (): Iterable<T> {
        for (const item of iter) if (filterFn(item)) yield item
      })()
    )
  }
  reduce<TAcc>(reducer: (accumulator: TAcc, curr: T) => TAcc, initial: TAcc) {
    let curr: TAcc = initial
    for (const item of this.iter) {
      curr = reducer(curr, item)
    }
    return curr
  }
  some(check: (v: T) => boolean): boolean {
    for (const item of this.iter) {
      if (check(item)) return true
    }
    return false
  }
}
