import { expect, test } from 'vitest'
import reduce from './reduce'
const getMax = (a, b) => Math.max(a, b)

test('reduce max empty', () => expect(reduce([], getMax, 1)).eq(1))
test('reduce max single', () => expect(reduce([2], getMax, 0)).eq(2))
test('reduce max multi', () => expect(reduce([1, 2, 3], getMax, 0)).eq(3))
