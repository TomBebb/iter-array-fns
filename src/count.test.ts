import { test, expect } from 'vitest'
import ExtIter from './iter'
const count = (iter: Iterable<unknown>): number => new ExtIter(iter).count()
test('count empty', () => expect(count([])).eq(0))
test('count single', () => expect(count([1])).eq(1))
test('count multi', () => expect(count([1, 2, 0, -1])).eq(4))
